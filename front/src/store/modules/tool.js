import { Notify } from 'quasar'
import * as toolEndpoints from '../../endpoints/tool'

const state = {
  tools: [],
  toolsDetails: {}
}

const getters = {
  getTools: (state) => {
    return state.tools
  }
}

const mutations = {
  SET_TOOLS: (state, tools) => {
    console.log('### SET_TOOLS', tools)
    console.log('### STATE', state)
    state.tools = tools
    console.log('### SET_TOOLS after', tools)
    console.log('### STATE after', state)
  }
}

const actions = {
  index: async ({ commit }, payload) => {
    console.log('## action payload=', payload)
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.index({ payload })
      .then((response) => {
        if (response.status === 200) {
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
        Notify.create({
          message: 'Oops! ' + error,
          color: 'red'
        })
      })
  },
  initStore: ({ commit }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.index({ payload })
      .then((response) => {
        if (response.status === 200) {
          console.log('## init store', response)
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
      })
  },
  create: ({ commit }, payload) => {
    commit('SET_PROCESSING', true, { root: true })

    return toolEndpoints.create({ payload })
      .then((response) => {
        if (response.status === 201) {
          console.log('response data create', response.data)
          commit('SET_PROCESSING', false, { root: true })
          Notify.create({
            message: 'Tool criada com sucesso!',
            color: 'green'
          })
        }
      }).catch((error) => {
        console.log('### ', error)
        Notify.create({
          message: 'Oops! ' + error,
          color: 'red'
        })
      })
  },
  delete: ({ commit, getters }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.destroy({ payload })
      .then((response) => {
        if (response.status === 200) {
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
        Notify.create({
          message: 'Oops! ' + error,
          color: 'red'
        })
      })
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
