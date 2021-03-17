export const state = () => ({
  toggleModal: false
})

export const mutations = {
  TOGGLE_MODAL(state) {
    state.toggleModal = !state.toggleModal
  }
}

export const actions = {
  toggleModal({ commit }) {
    commit("TOGGLE_MODAL")
  }
}

export const getters = {
  toggleModal: state => state.toggleModal
}