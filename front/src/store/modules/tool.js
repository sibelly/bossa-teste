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
  index: ({ commit }, payload) => {
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
  initStore: ({ commit }, payload) => {
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
  create: ({ commit }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.create({ payload })
      .then((response) => {
        if (response.status === 200) {
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
      })
  },
  delete: ({ commit }, payload) => {
    commit('SET_PROCESSING', true, { root: true })
    return toolEndpoints.destroy({ payload })
      .then((response) => {
        if (response.status === 200) {
          commit('SET_TOOLS', response.data)
          commit('SET_PROCESSING', false, { root: true })
        }
      }).catch((error) => {
        console.log('### ', error)
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
