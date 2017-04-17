const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('can be added', async t => {
  const addModule = sinon.spy()
  const context = { ignite: { addModule } }
  await plugin.add(context)
  t.true(addModule.calledWith('react-native-img-cache'))
})
