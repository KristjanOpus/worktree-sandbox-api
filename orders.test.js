const { test } = require('node:test')
const assert = require('node:assert')
const { listOrders } = require('./orders')

test('lists the orders', () => {
  assert.strictEqual(listOrders().length, 2)
})
