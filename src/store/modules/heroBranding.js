import { getHeroBranding } from '@/api/heroBranding'

const state = {
  heroBranding: {
    title: '',
    description: '',
    button_title: '',
    button_href: '',
    background_img: ''
  }
}

const mutations = {
  UPDATE_HERO_BRANDING: (state, { title, description, button_title, button_href, background_img }) => {
    state.heroBranding.title = title
    state.heroBranding.description = description
    state.heroBranding.button_title = button_title
    state.heroBranding.button_href = button_href
    state.heroBranding.background_img = background_img
  }
}

const actions = {
  getHeroBranding({ commit }) {
    getHeroBranding().then(response => {
      commit('UPDATE_HERO_BRANDING', response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
