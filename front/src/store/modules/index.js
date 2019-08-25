import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/) // extrai arquivos js de dentro da pasta
const modules = {}

requireModule.keys().forEach(filename => {
  if (filename === './index.js') return // ignora o index

  const moduleName = camelCase(filename.replace(/(\.\/|\.js)/g, ''))

  modules[moduleName] = requireModule(filename).default
})

export default modules
