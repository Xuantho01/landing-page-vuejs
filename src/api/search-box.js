import request from '@/utils/request'

export function getSearchBox() {
  return request({
    url: 'search-box-section/get-latest',
    method: 'get'
  })
}
