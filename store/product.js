const state = () => ({
  list: []
})

const getters = {}

const mutations = {
  SET_LIST(state, products) {
    state.list = products
  }
}

const actions = {
  async GET_LIST({ state, commit, rootState }, params) {
    const data = await this.$axios.$post('/api/product/list')
    commit('SET_LIST', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
