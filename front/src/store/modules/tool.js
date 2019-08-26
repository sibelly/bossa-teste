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
    state.tools = tools
  }
}

const actions = {
  index: async ({ commit }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    commit('SET_TOOLS', [])

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
  initStore: ({ commit, getters }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.index({ payload })
      .then((response) => {
        if (response.status === 200) {
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
      })
  },
  create: ({ commit, getters }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.create({ payload })
      .then((response) => {
        if (response.status === 201) {
          commit('SET_PROCESSING', false, { root: true })
          Notify.create({
            message: 'Tool criada com sucesso!',
            color: 'green'
          })

          commit('SET_TOOLS', [])
          commit('SET_TOOLS', getters['getTools'])
          console.log('### getters=', getters['getTools'])
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
  delete: ({ commit, getters }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.destroy({ payload })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
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
