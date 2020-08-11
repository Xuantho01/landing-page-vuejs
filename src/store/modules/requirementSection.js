import { getRequirementSection } from '@/api/requirementSection'

const state = {
  requirementSection: {
    title: '',
    description: '',
    image_url: '',
    requirementList: []
  }
}

const mutations = {
  UPDATE_REQUIREMENT_SECTION: (state, obj) => {
    state.requirementSection = obj
  }
}

const actions = {
  requirementSection({ commit }) {
    return getRequirementSection().then(response => {
      commit('UPDATE_REQUIREMENT_SECTION', response.data.data)
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

