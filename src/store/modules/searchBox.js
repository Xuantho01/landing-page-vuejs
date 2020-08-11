import { getSearchBox } from '@/api/search-box'

const state = {
  searchBox: {
    logo_src: '',
    search_placeholder: ''
  }
}

const mutations = {
  UPDATE_SEARCH_BOX: (state, { logo_src, search_placeholder }) => {
    state.searchBox.logo_src = logo_src
    state.searchBox.search_placeholder = search_placeholder
  }
}

const actions = {
  getSearchBox({ commit }) {
    getSearchBox().then(response => {
      commit('UPDATE_SEARCH_BOX', response.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
