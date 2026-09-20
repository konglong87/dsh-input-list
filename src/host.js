import z from '@deepseek-ai/schemastery'
import { DEFAULT_ITEMS, LIMITS, NAMESPACE, validateItems } from './model.js'

export const inject = ['settings']
export const SnippetSchema = z.object({
  items: z.array(z.object({
    id: z.string().required().max(LIMITS.id),
    title: z.string().required().max(LIMITS.title),
    content: z.string().required().max(LIMITS.content),
  })).max(LIMITS.items).default(DEFAULT_ITEMS),
})

export function apply(ctx) {
  ctx.settings.register(NAMESPACE, SnippetSchema, {
    validate: value => { validateItems(value.items) },
  })
}
