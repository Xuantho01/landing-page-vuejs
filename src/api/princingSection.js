import request from '@/utils/request'

export function getPrincingSection() {
  return request({
    url: 'pricing-component-section/get-latest',
    method: 'get'
  })
}
