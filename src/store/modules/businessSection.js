import { getBusinessSection } from '@/api/businessSection'

const state = {
  businessSection: {
    section_title: '',
    video_url: '',
    video_title: '',
    image_url: '',
    businessFeatureList: [
    ]
  }
}

const mutations = {
  UPDATE_BUSINESS_SECTION: (state, obj) => {
    state.businessSection = obj
  }
}

const actions = {
  businessSection({ commit }) {
    getBusinessSection().then(response => {
      commit('UPDATE_BUSINESS_SECTION', response.data.data)
      // console.log(response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

