import axios from 'axios'

export default {
  namespaced: true,
  state: {
    user: null,
    token: null
  },
  getters: {
    user (state) {
      return state.user
    },
    authenticated (state) {
      return state.token
    }
  },
  mutations: {
    SET_USER (state, data) {
      state.user = data
    },
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    // Validating their login credentials
    async login ({ dispatch }, credentials) {
      const response = await axios.post('api/auth/login', credentials)

      return dispatch('attempt', response.data.data.token)
    },

    // Validating token if valid or not.
    async attempt ({ commit }, token) {
      if (!token) {
        return
      }

      commit('SET_TOKEN', token)

      try {
        const response = await axios.get('api/auth/me')
        commit('SET_USER', response.data.data)
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },

    // Register new user.
    async preRegistration ({ commit }, credentials) {
      const response = await axios.post('api/pre-registration', credentials)

      commit('SET_USER', response.data.data)
      return response.data.data
    },

    // Logout and set all credentials to null
    async logout ({ commit }) {
      const response = await axios.post('api/auth/logout')

      commit('SET_TOKEN', null)
      commit('SET_USER', null)

      return response.data.data
    }
  }
}
