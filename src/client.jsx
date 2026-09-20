import React from 'react'
import { SnippetButton, MessageSnippetButton } from './panel.jsx'
import { NAMESPACE, PLUGIN_ID, SLOT, USER_ACTION_SLOT } from './model.js'
import styles from './styles.css'

export const inject = ['slots', 'settingsScope']

export function apply(ctx) {
  const scope = ctx.settingsScope.bind({ namespace: NAMESPACE })
  ctx.effect(() => {
    if (typeof document === 'undefined') return
    const style = document.createElement('style')
    style.dataset.plugin = NAMESPACE
    style.textContent = styles
    document.head.appendChild(style)
    return () => style.remove()
  })
  ctx.slots.inject(SLOT, () => ctx.slots.register({
    name: SLOT,
    id: PLUGIN_ID,
    order: 100,
  }, props => <SnippetButton {...props} scope={scope} />))
  ctx.slots.inject(USER_ACTION_SLOT, () => ctx.slots.register({
    name: USER_ACTION_SLOT,
    id: PLUGIN_ID,
    order: 100,
  }, props => <MessageSnippetButton {...props} scope={scope} />))
}
