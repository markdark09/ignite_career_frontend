import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './auth/index'
import Global from './global/index'
import Menu from './menu/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    global: Global,
    auth: Auth,
    menu: Menu
  }
})
