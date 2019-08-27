import request from './request'

export function index (data) {
  var params = ''
  if (data.payload) {
    params = data.payload
  }
  return request({
    url: `/tools${params}`,
    method: 'get'
  })
}

export function create (data) {
  var params
  if (data.payload) {
    params = data.payload
  }
  return request({
    url: `/tools`,
    method: 'post',
    data: params
  })
}

export function show (data) {
  return request({
    url: `/tools/${data.payload}`,
    method: 'get'
  })
}

export function update (data) {
  var params
  params = data.payload
  return request({
    url: `/tools/${data.payload._id}`,
    method: 'put',
    data: params
  })
}

export function destroy (data) {
  return request({
    url: `/tools/${data.payload._id}`,
    method: 'delete'
  })
}
