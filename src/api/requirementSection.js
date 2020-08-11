import request from '@/utils/request'

export function getRequirementSection() {
  return request({
    url: 'requirement-section/get-latest',
    method: 'get'
  })
}
