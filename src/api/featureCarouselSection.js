import request from '@/utils/request'

export function getFeatureCarouselSection() {
  return request({
    url: 'feature-carousel-section/get-latest',
    method: 'get'
  })
}
