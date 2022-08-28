import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import VuetifyToast from 'vuetify-toast-snackbar'
import light from './theme'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})

Vue.use(VuetifyToast)

export default new Vuetify({
  theme: {
    themes: { light }
  },
  icons: {
    iconfont: 'mdi'
  }
})
