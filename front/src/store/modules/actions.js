import * as authEndpoints from '../../endpoints/auth'
import * as toolEndpoints from '../../endpoints/tool'

/** ****************************************** Autenticacao/Usuarios */

export async function signIn ({ commit }, payload) {
  console.log('### huehue')
  return authEndpoints.login(payload)
    .then((response) => {
      console.info('### => ', process.env)
      console.log('### response => ', response)
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/dashboard')
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
  console.log('### chegou no store => ', payload)
  return authEndpoints.registrar(payload)
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        this.$router.push('/dashboard')
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

/** ****************************************** Tools */

export async function index ({ commit }, payload) {
  console.log('CHAMANDO ACTIOOONS ??')
  return toolEndpoints.index({ payload })
    .then((response) => {
      console.log('response index de tools => ', response)
      if (response.status === 200) {
      }

      if (response.status === 401) {
        let content = {
          alert: true,
          title: 'Usuário não autorizado',
          msg: response.data.errors
        }
        commit('shared/setShowDialog', { show: true, content: content }, { root: true })
      }
    }).catch((error) => {
      let content = {
        alert: true,
        title: 'Não foi possível listar os bovinos ' + error.data.status,
        msg: error.data.errors
      }
      commit('shared/setShowDialog', { show: true, content: content }, { root: true })
    })
}
