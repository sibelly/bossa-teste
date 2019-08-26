import * as authEndpoints from '../endpoints/auth'

/** ****************************************** Autenticacao/Usuarios */

export async function signIn ({ commit }, payload) {
  return authEndpoints.login(payload)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
      }

      if (response.status === 401) {
        console.log('### 401')
        let content = {
          alert: true,
          title: 'Usuário não autorizado',
          msg: response.data.error ? response.data.error : response.data.errors
        }
        commit('shared/setShowDialog', { show: true, content: content }, { root: true })
      }
    }).catch((error) => {
      var content = ''
      if (error.response) {
        content = {
          alert: true,
          title: 'Algo inesperado aconteceu ao efetuar o login',
          msg: error.data.error ? error.data.error : error.data.errors
        }
      } else {
        content = error
      }
      commit('shared/setShowDialog', { show: true, content: content }, { root: true })
    })
}

export async function signUp ({ commit }, payload) {
  return authEndpoints.registrar(payload)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
      }

      if (response.status === 401) {
        let content = {
          alert: true,
          title: 'Usuário não autorizado',
          msg: response.data.error ? response.data.error : response.data.errors
        }
        commit('shared/setShowDialog', { show: true, content: content }, { root: true })
      }
    }).catch((error) => {
      var content = ''
      if (error.response) {
        content = {
          alert: true,
          title: 'Algo inesperado aconteceu ao efetuar o login',
          msg: error.data.error ? error.data.error : error.data.errors
        }
      } else {
        content = error
      }
      commit('shared/setShowDialog', { show: true, content: content }, { root: true })
    })
}
