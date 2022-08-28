import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm'

import '@/static/scss/index.scss'

Vue.config.productionTip = false

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

require('./store/auth/subscriber')

// local
axios.defaults.baseURL = 'http://localhost:8000/'

store.dispatch('auth/attempt', localStorage.getItem('token'))
  .then(() => {
    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
