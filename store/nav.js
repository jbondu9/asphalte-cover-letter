export const state = () => ({
  toggleDrawer: false
})

export const mutations = {
  TOGGLE_DRAWER(state) {
    state.toggleDrawer = !state.toggleDrawer
  }
}

export const actions = {
  toggleDrawer({ commit }) {
    commit("TOGGLE_DRAWER")
  }
}

export const getters = {
  toggleDrawer: state => state.toggleDrawer
}