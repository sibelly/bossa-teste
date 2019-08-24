import request from './request'

export function registrar (data) {
  return request({
    url: '/registrar',
    method: 'post',
    data
  })
}

export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'get'
  })
}

export function getUserInfo (token) {
  return request({
    url: '/usuarios/',
    method: 'get',
    params: { token }
  })
}
