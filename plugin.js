const NPM_MODULE_NAME = 'react-native-img-cache'

const add = async function (context) {
  const { ignite } = context
  await ignite.addModule(NPM_MODULE_NAME)
}

const remove = async function (context) {
  const { ignite } = context
  await ignite.removeModule(NPM_MODULE_NAME)
}

module.exports = { add, remove }
