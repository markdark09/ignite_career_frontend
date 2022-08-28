import axios from 'axios'
export default {
  namespaced: true,
  state: {
    categories: [],
    products: []
  },
  getters: {
    categories (state) {
      return state.current_progress
    },
    products (state) {
      return state.is_loading
    }
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  },
  actions: {
    // Validating their login credentials
    async getListOfCategories ({ commit }) {
      const categories = await axios.get('api/menu/categories')
      commit('SET_CATEGORIES', categories)

      return categories
    },

    async getListOfProducts ({ commit }) {
      const products = await axios.get('api/menu/products')
      commit('SET_PRODUCTS', products)

      return products
    }
  }
}
