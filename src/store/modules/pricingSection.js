import { getPrincingSection } from '@/api/princingSection'

const state = {
  pricingSectionObj: {
    title: '',
    description: '',
    popularTitle: '',
    pricingTableList: []
  }
}

const mutations = {
  UPDATE_PRICING: (state, obj) => {
    state.pricingSectionObj = obj
  }
}

const actions = {
  updatePricingSection({ commit }) {
    getPrincingSection().then(response => {
      console.log('pricing', response.data.data)
      commit('UPDATE_PRICING', response.data.data)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
