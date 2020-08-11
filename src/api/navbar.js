import request from '@/utils/request'

export function getNavbar() {
  return request({
    url: 'navbar-section/get-latest',
    method: 'get',
    baseURL: 'http://192.168.1.122:8081/api/'
  })
}
