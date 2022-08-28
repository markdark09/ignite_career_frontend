<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-toolbar-title>Menu</v-toolbar-title>
    <v-spacer></v-spacer>
    <profile-settings />
  </v-app-bar>
</template>
<script>
import ProfileSettings from '../molecules/ProfileSettings.vue'
export default {
  components: { ProfileSettings }
}
</script>
