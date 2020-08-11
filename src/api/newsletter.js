import request from '@/utils/request'

export function getNewsletter() {
  return request({
    url: 'newsletter-section/get-latest',
    method: 'get'
  })
}
