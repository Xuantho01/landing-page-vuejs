import { getFeatureCarouselSection } from '@/api/featureCarouselSection'

const state = {
  featureCarouselSection: {
    featureCarouselList: []
  }
}

const mutations = {
  UPDATE_FEATURE_CAROUSEL_SECTION: (state, obj) => {
    state.featureCarouselSection = obj
  }
}

const actions = {
  getFeatureCarouselSection({ commit }) {
    getFeatureCarouselSection().then(response => {
      console.log(response.data.data)
      commit('UPDATE_FEATURE_CAROUSEL_SECTION', response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
