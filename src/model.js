export const PLUGIN_ID = 'dsh-input-list'
// Keep the settings key stable so existing saved snippets survive the package rename.
export const NAMESPACE = 'dsh-input-list-demo'
export const SLOT = 'conversation.input.right'
export const USER_ACTION_SLOT = 'conversation.chat.user-actions'
export const LIMITS = Object.freeze({ items: 100, title: 80, content: 12000, id: 100 })
export const DEFAULT_ITEMS = [
  { id: 'one', title: '第一项', content: '这是一个演示列表项' },
  { id: 'two', title: '第二项', content: '按钮和列表都来自插件' },
  { id: 'three', title: '第三项', content: '下一步可以接入 dsh 服务' },
]

export function draftFromMessage(text) {
  return {
    title: (text.split(/\r?\n/).find(line => line.trim()) || '').trim().slice(0, LIMITS.title),
    content: text,
  }
}

export function validateItems(items) {
  if (!Array.isArray(items) || items.length > LIMITS.items) throw new Error(`最多保存 ${LIMITS.items} 条内容`)
  const ids = new Set()
  for (const item of items) {
    for (const field of ['id', 'title', 'content']) {
      if (typeof item?.[field] !== 'string' || !item[field].trim()) throw new Error('名称和正文不能为空')
      if (item[field].length > LIMITS[field]) throw new Error(`${field} 超出长度限制`)
    }
    if (ids.has(item.id)) throw new Error('条目 ID 不能重复')
    ids.add(item.id)
  }
  return items
}

export function saveItem(items, item, editingId) {
  if (editingId && !items.some(row => row.id === editingId)) throw new Error('条目已被删除，请重新打开列表')
  const normalized = { id: editingId || item.id, title: item.title.trim(), content: item.content }
  const next = editingId
    ? items.map(row => row.id === editingId ? normalized : row)
    : [...items, normalized]
  return validateItems(next)
}

export function deleteItem(items, id) {
  if (!items.some(row => row.id === id)) throw new Error('条目已被删除，请重新打开列表')
  return items.filter(row => row.id !== id)
}

export function appendDraft(draft, content) {
  return draft + (draft && !draft.endsWith('\n') ? '\n' : '') + content
}

export function persistItems(scope, snapshot, items) {
  if (snapshot.status !== 'ready' || !snapshot.writable || snapshot.mode !== 'host'
    || !Number.isInteger(snapshot.revision)) throw new Error('设置尚未就绪或当前连接不支持保存')
  validateItems(items)
  return scope.mutate([{ op: 'set', path: ['items'], value: items }], snapshot.revision)
}
