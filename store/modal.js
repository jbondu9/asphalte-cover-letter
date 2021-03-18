export const state = () => ({
  toggleModal: false
})

export const mutations = {
  TOGGLE_MODAL(state) {
    if (state.toggleModal) {
      document.querySelector(".site-container").classList.remove("overflow-hidden");
    }
    else {
      document.querySelector(".site-container").classList.add("overflow-hidden");
    } 
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