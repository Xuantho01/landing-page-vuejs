import request from '@/utils/request'

export function getAboutSection() {
  return request({
    url: 'about-section/get-latest',
    method: 'get'
  })
}
