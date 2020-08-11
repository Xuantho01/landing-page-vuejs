import request from '@/utils/request'

export function getBusinessSection() {
  return request({
    url: 'business-section/get-latest',
    method: 'get'
  })
}
