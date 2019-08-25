import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import * as state from './state'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  actions,
  getters,
  mutations,
  state,

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

// Chama automaticamente uma action padrao para todos os modulos
// https://github.com/ErikCH/VuexModules
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.initStore) {
    store.dispatch(`${moduleName}/initStore`)
  }
}

export default store
