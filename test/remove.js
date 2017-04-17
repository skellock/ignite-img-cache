const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('can be removed', async t => {
  const removeModule = sinon.spy()
  const context = { ignite: { removeModule } }
  await plugin.remove(context)
  t.true(removeModule.calledWith('react-native-img-cache'))
})
