<template>
  <div id="app">
    <v-app id="inspire">
      <v-overlay :value="isLoading">
        <v-progress-circular
          indeterminate
          size="75"
        ></v-progress-circular>
      </v-overlay>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      user: 'auth/user',
      isLoading: 'global/isLoading'
    })
  },
  watch: {
    user: function (newVal) {
      if (newVal != null) {
        this.$router.replace({
          name: 'menu'
        })
      } else {
        this.$router.replace({
          name: 'login'
        })
      }
    }
  }
}
</script>
