import React, { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { Plus, Pencil, Star, Trash2, X } from 'lucide-react'
import { appendDraft, deleteItem, draftFromMessage, LIMITS, persistItems, saveItem } from './model.js'

const PANEL_WIDTH = 360
const EDGE = 12
const GAP = 8
const EMPTY = []

function IconButton({ label, icon: Icon, ...props }) {
  return <button type="button" className="dsh-snippets-icon" aria-label={label} title={label} {...props}><Icon size={16} /></button>
}

function Editor({ item, pending, onSave, onCancel }) {
  const [title, setTitle] = useState(item?.title || '')
  const [content, setContent] = useState(item?.content || '')
  return <form className="dsh-snippets-editor" onSubmit={e => { e.preventDefault(); onSave({ title, content }) }}>
    <label>名称<input aria-label="名称" autoFocus value={title} maxLength={LIMITS.title} disabled={pending} onChange={e => setTitle(e.target.value)} /></label>
    <label>正文<textarea aria-label="正文" value={content} maxLength={LIMITS.content} rows={6} disabled={pending} onChange={e => setContent(e.target.value)} /></label>
    {content.length > LIMITS.content && <p role="alert">正文超过 {LIMITS.content} 字，请缩短后保存。</p>}
    <footer><button type="button" disabled={pending} onClick={onCancel}>取消</button><button className="dsh-snippets-primary" type="submit" disabled={pending || !title.trim() || !content.trim() || content.length > LIMITS.content}>{pending ? '保存中…' : '保存'}</button></footer>
  </form>
}

function SnippetPanel({ scope, inputActions, useInput, anchor, onClose, initialText }) {
  const snapshot = useSyncExternalStore(fn => scope.subscribe(fn), () => scope.getSnapshot())
  const input = useInput(value => value)
  const items = snapshot.value?.items || EMPTY
  const [editor, setEditor] = useState(() => initialText === undefined ? null : {
    item: null, fields: draftFromMessage(initialText), base: snapshot,
  })
  const [removal, setRemoval] = useState(null)
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)
  const busy = useRef(false)
  const panel = useRef(null)
  const [position, setPosition] = useState(null)
  const writable = snapshot.status === 'ready' && snapshot.writable && snapshot.mode === 'host'
  const inputLocked = !inputActions || !input || input.phase === 'adjudicating' || input.phase === 'submitting'
  const full = items.length >= LIMITS.items && !editor?.item

  // Capture the first ready revision without replacing any typed draft.
  useEffect(() => {
    if (snapshot.status === 'ready') setEditor(current =>
      current && current.base.status !== 'ready' ? { ...current, base: snapshot } : current)
  }, [snapshot])

  useLayoutEffect(() => {
    const place = () => {
      const rect = anchor.current.getBoundingClientRect()
      const width = Math.min(PANEL_WIDTH, window.innerWidth - EDGE * 2)
      const above = rect.top - EDGE - GAP
      const below = window.innerHeight - rect.bottom - EDGE - GAP
      const up = above >= below
      setPosition({
        width, left: Math.max(EDGE, Math.min(rect.right - width, window.innerWidth - width - EDGE)),
        maxHeight: Math.max(80, up ? above : below),
        ...(up ? { bottom: window.innerHeight - rect.top + GAP } : { top: rect.bottom + GAP }),
      })
    }
    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => { window.removeEventListener('resize', place); window.removeEventListener('scroll', place, true) }
  }, [anchor])

  useEffect(() => {
    const outside = e => {
      if (!busy.current && !editor && !removal && !panel.current?.contains(e.target) && !anchor.current?.contains(e.target)) onClose()
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [anchor, editor, removal, onClose])

  async function commit(base, next) {
    if (busy.current) return
    busy.current = true
    setPending(true)
    setError('')
    try {
      await persistItems(scope, base, next())
      if (initialText !== undefined) { onClose(); return }
      setEditor(null)
      setRemoval(null)
    } catch (e) {
      setError(`保存失败：${e.message}。内容已保留；若其他页面已修改，请取消后重新编辑。`)
    } finally {
      busy.current = false
      setPending(false)
    }
  }

  function choose(item) {
    if (inputLocked) return
    inputActions.setDraft(appendDraft(input.draft, item.content))
    onClose()
  }

  const cancel = () => {
    if (initialText !== undefined) { onClose(); return }
    setEditor(null); setRemoval(null); setError('')
  }
  return createPortal(<section ref={panel} className="dsh-snippets-panel" role="dialog" aria-label="常用内容"
    style={{ ...position, visibility: position ? 'visible' : 'hidden' }}
    onKeyDown={e => {
      if (e.key === 'Escape' && !pending) { e.stopPropagation(); editor || removal ? cancel() : onClose() }
    }}>
    <header><strong>{editor ? (editor.item ? '编辑内容' : '新增内容') : '常用内容'}</strong>
      <div>{!editor && !removal && <IconButton icon={Plus} label="新增内容" disabled={!writable || pending || items.length >= LIMITS.items} onClick={() => { setError(''); setEditor({ item: null, base: snapshot }) }} />}
        <IconButton icon={X} label={editor || removal ? '取消编辑' : '关闭列表'} disabled={pending} onClick={editor || removal ? cancel : onClose} /></div>
    </header>
    {snapshot.status === 'loading' && <p role="status">加载中…</p>}
    {snapshot.status !== 'loading' && !writable && <p role="status">当前连接无法保存设置</p>}
    {editor && full && <p role="alert">最多保存 {LIMITS.items} 条内容，请先删除不需要的条目。</p>}
    {error && <p className="dsh-snippets-error" role="alert">{error}</p>}
    {editor ? <Editor key={editor.item?.id || 'new'} item={editor.item || editor.fields} pending={pending || !writable || full} onCancel={cancel}
      onSave={fields => commit(editor.base, () => saveItem(editor.base.value.items, {
        ...fields, id: editor.item?.id || crypto.randomUUID(),
      }, editor.item?.id))} />
      : removal ? <div className="dsh-snippets-confirm"><p>删除“{removal.item.title}”？</p>
        <footer><button disabled={pending} onClick={cancel}>取消</button><button className="dsh-snippets-danger" disabled={pending}
          onClick={() => commit(removal.base, () => deleteItem(removal.base.value.items, removal.item.id))}>{pending ? '删除中…' : '确认删除'}</button></footer></div>
        : <ul className="dsh-snippets-list">{items.map(item => <li key={item.id}>
          <button className="dsh-snippets-pick" type="button" disabled={inputLocked} title={item.content} onClick={() => choose(item)}>
            <strong>{item.title}</strong><span>{item.content}</span></button>
          <IconButton icon={Pencil} label={`编辑 ${item.title}`} disabled={!writable || pending} onClick={() => { setError(''); setEditor({ item, base: snapshot }) }} />
          <IconButton icon={Trash2} label={`删除 ${item.title}`} disabled={!writable || pending} onClick={() => { setError(''); setRemoval({ item, base: snapshot }) }} />
        </li>)}</ul>}
    {snapshot.status === 'ready' && !items.length && !editor && <p>暂无常用内容</p>}
  </section>, document.body)
}

export function MessageSnippetButton({ text, ...props }) {
  const [open, setOpen] = useState(false)
  const anchor = useRef(null)
  if (!text?.trim()) return null
  return <>
    <button ref={anchor} type="button" className="dsh-snippets-message-star"
      aria-label="添加到常用内容" title="添加到常用内容"
      aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <Star size={16} aria-hidden="true" />
    </button>
    {open && <SnippetPanel {...props} initialText={text} anchor={anchor}
      onClose={() => { setOpen(false); anchor.current?.focus() }} />}
  </>
}

export function SnippetButton(props) {
  const [open, setOpen] = useState(false)
  const anchor = useRef(null)
  return <>
    <button ref={anchor} type="button" className={`dsh-snippets-star${open ? ' is-open' : ''}`} title="常用内容"
      aria-label="常用内容" aria-expanded={open} aria-haspopup="dialog" onClick={() => setOpen(value => !value)}>☆</button>
    {open && <SnippetPanel {...props} anchor={anchor} onClose={() => { setOpen(false); anchor.current?.focus() }} />}
  </>
}
