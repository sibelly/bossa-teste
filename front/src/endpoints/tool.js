import request from './request'

export function index (data) {
  return request({
    url: `/tools`,
    method: 'get'
  })
}

export function create (data) {
  console.log('request create => ', data)
  var params
  if (data.params) {
    params = data.payload
  }
  return request({
    url: `/tools`,
    method: 'post',
    params
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
    params
  })
}

export function destroy (data) {
  return request({
    url: `/tools/${data.payload._id}`,
    method: 'delete'
  })
}
