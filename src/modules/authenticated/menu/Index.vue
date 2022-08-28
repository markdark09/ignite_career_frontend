<template>
  <v-app id="inspire">
    <side-bar />
    <navigation-bar />
    <main-content>
      <template slot="content">
        <category class="mt-10" />
        <product class="mt-10" />
      </template>
    </main-content>
    <footer-bar />
  </v-app>
</template>
<script>
import SideBar from '@/components/global/layout-1/organisms/SideBar.vue'
import NavigationBar from '@/components/global/layout-1/organisms/NavigationBar.vue'
import MainContent from '@/components/global/layout-1/organisms/MainContent.vue'
import FooterBar from '@/components/global/layout-1/organisms/FooterBar.vue'
import Category from './organisms/Category.vue'
import Product from './organisms/Product.vue'
export default {
  components: { SideBar, NavigationBar, MainContent, FooterBar, Category, Product },
  name: 'MenuIndex',
  data () {
    return {
      tabs: [
        {
          icon: 'mdi-food',
          name: 'Menu'
        }
      ]
    }
  }
}
</script>
