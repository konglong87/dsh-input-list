import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { PLUGIN_ID, SLOT, USER_ACTION_SLOT } from '../src/model.js'

// Point CORDIS_MODULE at the installed DSH runtime to test its exact version.
const { Context } = await import(process.env.CORDIS_MODULE || '@deepseek-ai/cordis')
const source = readFileSync(new URL('../client.js', import.meta.url), 'utf8')

function loadPlugin() {
  let registration
  vm.runInNewContext(source, {
    window: { __ModuleLoader__: { load(value) { registration = value } } },
  })
  assert.equal(registration.id, 'dsh-input-list')
  return registration.factory((name) => {
    assert.ok(['react', 'react-dom'].includes(name), `unexpected external: ${name}`)
    return name === 'react' ? React : ReactDOM
  })
}

async function withSlots(run, available = [SLOT, USER_ACTION_SLOT]) {
  const ctx = new Context()
  const entries = []
  // A sibling provider is essential: root-provided services mask missing inject.
  const provider = ctx.plugin({
    apply(scope) {
      scope.provide('slots', {
        inject(name, callback) {
          assert.ok([SLOT, USER_ACTION_SLOT].includes(name))
          return available.includes(name) ? callback() : () => {}
        },
        register(options, component) {
          entries.push({ options, component })
          return () => {}
        },
      })
      scope.provide('settingsScope', {
        bind(options) {
          assert.equal(options.namespace, 'dsh-input-list-demo')
          return {
            getSnapshot: () => ({
              status: 'ready',
              value: { items: [] },
              base: undefined,
              user: undefined,
              revision: 0,
              writable: true,
              mode: 'host',
            }),
            subscribe: () => () => {},
            mutate: async () => {},
          }
        },
      })
    },
  })
  await provider.await()
  try {
    await run(ctx, entries)
  } finally {
    await provider.dispose()
  }
}

test('client loads with a sibling slots provider and registers the input button', async () => {
  await withSlots(async (ctx, entries) => {
    const fiber = ctx.plugin(loadPlugin())
    try {
      await fiber.await()
      assert.equal(entries.length, 2)
      assert.equal(entries[0].options.name, SLOT)
      assert.equal(entries[0].options.id, PLUGIN_ID)
      assert.equal(typeof entries[0].component, 'function')
      assert.equal(entries[1].options.name, USER_ACTION_SLOT)
      assert.equal(entries[1].options.id, PLUGIN_ID)
    } finally {
      await fiber.dispose()
    }
  })
})

test('older hosts keep the input button when user actions are unavailable', async () => {
  await withSlots(async (ctx, entries) => {
    const fiber = ctx.plugin(loadPlugin())
    try {
      await fiber.await()
      assert.deepEqual(entries.map(entry => entry.options.name), [SLOT])
    } finally {
      await fiber.dispose()
    }
  }, [SLOT])
})

test('removing service inject reproduces the reported error', async () => {
  await withSlots(async (ctx, entries) => {
    const { apply } = loadPlugin()
    const fiber = ctx.plugin({ inject: ['settingsScope'], apply })
    try {
      await assert.rejects(fiber.await(), /cannot get property "slots" without inject/)
      assert.equal(entries.length, 0)
    } finally {
      await fiber.dispose()
    }
  })
})
