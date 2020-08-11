import request from '@/utils/request'

export function getFooter() {
  return request({
    url: 'footer-section/get-latest',
    method: 'get'
  })
}
