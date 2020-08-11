import { getFeatureCarouselSection } from '@/api/featureCarouselSection'

const state = {
  featureCarouselSection: {
    featureCarouselList: [
      {
        title: '',
        description: '',
        image_url: ''
      }
    ]
  }
}

const mutations = {
  UPDATE_FEATURE_CAROUSEL_SECTION: (state, obj) => {
    state.featureCarouselSection = obj
  }
}

const actions = {
  featureCarouselSection({ commit }) {
    getFeatureCarouselSection().then(response => {
      commit('UPDATE_FEATURE_CAROUSEL_SECTION', response.data.data)
      console.log(response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
