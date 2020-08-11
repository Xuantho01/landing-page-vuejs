import { getProgressCircle } from '@/api/progressCircle'

const state = {
  featureProgressList: []
}
const mutations = {
  UPDATE_PROGRESS_CIRCLE: (state, obj) => {
    state.featureProgressList = obj.featureProgressList
  }
}

const actions = {
  updateProgressCircle({ commit }) {
    getProgressCircle().then(response => {
      console.log(response.data.data)
      commit('UPDATE_PROGRESS_CIRCLE', response.data.data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
