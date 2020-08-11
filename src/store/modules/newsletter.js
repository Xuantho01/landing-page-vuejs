import { getNewsletter } from '@/api/newsletter'

const state = {
  newsletter: {
    title: 'This is long title. Join us now',
    button_title: 'Sub',
    button_href: '#',
    description: 'What’s next in product?',
    description_button_title: 'Learn moree',
    description_button_href: '#'
  }
}

const mutations = {
  UPDATE_NEWSLETTER: (state, newsletter) => {
    state.newsletter = newsletter
  }
}

const actions = {
  getNewsletter({ commit }) {
    getNewsletter().then(response => {
      commit('UPDATE_NEWSLETTER', response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
