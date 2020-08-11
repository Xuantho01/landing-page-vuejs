import { getFooter } from '@/api/footer'

const state = {
  footer: {
    logo_src: '',
    title: '',
    footerLinkList: []
  }
}

const mutations = {
  UPDATE_FOOTER: (state, footer) => {
    state.footer = footer
  }
}

const actions = {
  getFooter({ commit }) {
    getFooter().then(response => {
      commit('UPDATE_FOOTER', response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
