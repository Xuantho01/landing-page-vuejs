import { getNavbar } from '@/api/navbar'

const state = {
  logoSrc: ''
}

const mutations = {
  UPDATE_LOGO: (state, logoSrc) => {
    state.logoSrc = logoSrc
  }
}

const actions = {
  getLogoNavbar({ commit }) {
    getNavbar().then(response => {
      commit('UPDATE_LOGO', response.data.data.logo_src)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

