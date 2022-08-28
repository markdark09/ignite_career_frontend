<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      left
      offset-x
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-cog
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="`https://ui-avatars.com/api/?background=330099&color=fff&name=${user ? user.name : ''}`" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-subtitle>{{ user ? user.name : ''}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownData.user"
            :key="index"
            @click="item.method">
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title class="pl-5">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      dropdownData: {
        user: [
          {
            icon: 'mdi-logout',
            title: 'Logout',
            method: this.logoutSession
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      setLoading: 'global/setLoading'
    }),
    logoutSession () {
      // to trigger the popup warning in application-form
      let isOk = true

      if (this.$route.name === 'ApplicationForm') {
        isOk = confirm('Changes you made may not be saved?')
      }
      if (isOk) {
        this.setLoading(true)
        this.logout().then(() => {
          this.$router.push({
            name: 'login'
          })
        }).finally(() => {
          this.setLoading(false)
        })
      }
    }
  }
}
</script>
