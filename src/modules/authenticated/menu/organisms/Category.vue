<template>
  <div>
    <v-row class="justify-center">
      <h2>Categories</h2>
    </v-row>
    <v-row class="justify-center">
      <v-col md="6">
        <v-data-table
          :headers="headers"
          :items="categories"
          :search="search"
          item-key="id"
          loading-text="Loading... Please wait"
          :loading="isLoading"
          :sort-by="['created_at']"
          :sort-desc="[true]"
          class="elevation-2"
          mobile-breakpoint="900"
          :footer-props="footerProps"
          multi-sort>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'CategoryTable',
  data () {
    return {
      search: '',
      isLoading: false,
      showMenuButton: false,
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Created At',
          value: 'created_at'
        },
        {
          text: 'Updated At',
          value: 'updated_at'
        }
      ],
      categories: [],
      footerProps: {
        'items-per-page-options': [10, 20, 30, 40, 50]
      }
    }
  },
  mounted () {
    this.getListOfCategories()
      .then(response => {
        this.categories = response.data.data
      })
  },
  methods: {
    ...mapActions({
      getListOfCategories: 'menu/getListOfCategories'
    })
  }
}
</script>
