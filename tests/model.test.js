import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  appendDraft,
  DEFAULT_ITEMS,
  deleteItem,
  draftFromMessage,
  LIMITS,
  persistItems,
  saveItem,
  validateItems,
} from '../src/model.js'

test('message draft suggests the first nonempty line and preserves the full body', () => {
  const text = '\n  用户的标题  \r\n\n正文和格式\n'
  assert.deepEqual(draftFromMessage(text), { title: '用户的标题', content: text })
  const long = '字'.repeat(LIMITS.content + 1)
  assert.equal(draftFromMessage(long).title.length, LIMITS.title)
  assert.equal(draftFromMessage(long).content, long)
  assert.equal(draftFromMessage('  \n').title, '')
})
test('saves new and edited items without mutating the source list', () => {
  const source = DEFAULT_ITEMS.map(item => ({ ...item }))
  const created = saveItem(source, {
    id: 'custom',
    title: '  自定义  ',
    content: '用户内容',
  })

  assert.equal(source.length, DEFAULT_ITEMS.length)
  assert.equal(created.at(-1).title, '自定义')

  const edited = saveItem(created, {
    id: 'ignored-on-edit',
    title: '修改后',
    content: '新的正文',
  }, 'custom')
  assert.deepEqual(edited.at(-1), {
    id: 'custom',
    title: '修改后',
    content: '新的正文',
  })
})

test('deletes an existing item and rejects stale ids', () => {
  const items = DEFAULT_ITEMS.map(item => ({ ...item }))
  assert.equal(deleteItem(items, 'two').some(item => item.id === 'two'), false)
  assert.throws(() => deleteItem(items, 'missing'), /条目已被删除/)
})

test('appends content to a draft with one separator', () => {
  assert.equal(appendDraft('', '新内容'), '新内容')
  assert.equal(appendDraft('已有内容', '新内容'), '已有内容\n新内容')
  assert.equal(appendDraft('已有内容\n', '新内容'), '已有内容\n新内容')
})

test('validates item count, required text, length, and duplicate ids', () => {
  assert.throws(() => validateItems([{ id: 'x', title: '', content: '正文' }]), /不能为空/)
  assert.throws(() => validateItems([
    { id: 'x', title: 'a', content: 'a' },
    { id: 'x', title: 'b', content: 'b' },
  ]), /不能重复/)
  assert.throws(() => validateItems([
    { id: 'x', title: 'a'.repeat(LIMITS.title + 1), content: '正文' },
  ]), /超出长度限制/)
  assert.throws(() => validateItems(
    Array.from({ length: LIMITS.items + 1 }, (_, index) => ({
      id: String(index),
      title: '标题',
      content: '正文',
    })),
  ), /最多保存/)
})

test('persists the complete list with the snapshot revision', async () => {
  const calls = []
  const scope = {
    mutate: async (...args) => { calls.push(args) },
  }
  const snapshot = {
    status: 'ready',
    writable: true,
    mode: 'host',
    revision: 7,
  }
  const items = DEFAULT_ITEMS.map(item => ({ ...item }))

  await persistItems(scope, snapshot, items)

  assert.deepEqual(calls, [[
    [{ op: 'set', path: ['items'], value: items }],
    7,
  ]])
})
