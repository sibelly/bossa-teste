import axios from 'axios'
import { Loading, LocalStorage } from 'quasar'

// var API_URL = process.env.API_URL
// var API_PORT = parseInt(process.env.API_PORT)

const service = axios.create({
  baseURL: 'http://localhost:3000'
  // baseURL: `http://${API_URL}:${API_PORT}`
  // timeout: 5000 // request timeout
})

service.interceptors.request.use(
  (serviceConfig) => {
    Loading.show()
    let token = LocalStorage.getItem('token')
    if (token) {
      serviceConfig.headers['Authorization'] = 'Bearer ' + token
    }
    return serviceConfig
  },
  (error) => {
    Loading.hide()
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    Loading.hide()
    return response
  },
  (error) => {
    Loading.hide()
    if (error.response) {
      return Promise.resolve(error.response)
    } else {
      return Promise.resolve(error)
    }
  }
)

export default service
