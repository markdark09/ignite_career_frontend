export default {
  namespaced: true,
  state: {
    current_progress: null,
    is_loading: false
  },
  getters: {
    currentProgress (state) {
      return state.current_progress
    },
    isLoading (state) {
      return state.is_loading
    }
  },
  mutations: {
    SET_CURRENT_PROGRESS (state, currentProgress) {
      state.current_progress = currentProgress
    },
    SET_LOADING (state, isLoading) {
      state.is_loading = isLoading
    }
  },
  actions: {
    setCurrentProgress ({ commit }, currentProgress) {
      commit('SET_CURRENT_PROGRESS', currentProgress)
    },
    setLoading ({ commit }, isLoading) {
      commit('SET_LOADING', isLoading)
      return isLoading
    }
  }
}
