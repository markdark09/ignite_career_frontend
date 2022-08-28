<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list dense>
      <v-list-item
        v-for="(tab, key) in tabs"
        :key="key"
        link
      >
        <v-list-item-action>
          <v-icon>{{ tab.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ tab.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      drawer: true,
      tabs: [
        {
          icon: 'mdi-food',
          name: 'Menu'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>
