import request from '@/utils/request'

export function getProgressCircle() {
  return request({
    url: 'progress-circle-section/get-latest',
    method: 'get'
  })
}
