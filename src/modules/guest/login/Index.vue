<template>
  <v-app id="inspire">
    <v-container fill-height fluid>
      <v-row
        align="center"
        justify="center">
        <v-col md="3">
          <v-card
            class="overflow-hidden"
            color="primary lighten-1"
            dark
          >
            <v-toolbar
              flat
              color="primary"
            >
              <v-icon>mdi-account</v-icon>
              <v-toolbar-title class="font-weight-light">
                Login Form
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
              <validation-observer ref="observer">
                <v-form
                  ref="form"
                  lazy-validation
                  aria-autocomplete="off"
                  @submit.prevent="submit"
                >
                <v-card-text>
                  <validation-provider
                    name="Email Address"
                    rules="required|email"
                    v-slot="{ errors }"
                    vid="email"
                  >
                    <v-text-field
                      color="white"
                      name="email"
                      label="Email Address"
                      v-model="form.email"
                      :error-messages="errors"
                      autofocus
                      autocomplete="new"
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    name="Password"
                    rules="required"
                    v-slot="{ errors }"
                    vid="password"
                  >
                    <v-text-field
                      type="password"
                      color="white"
                      name="password"
                      label="Password"
                      v-model="form.password"
                      :error-messages="errors"
                      autocomplete="new"
                    ></v-text-field>
                  </validation-provider>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="success"
                    type="submit"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setLoading: 'global/setLoading',
      login: 'auth/login'
    }),
    async submit () {
      const isValid = await this.$refs.observer.validate()

      if (isValid) {
        const form = this.form
        this.setLoading(true)
        this.login(form)
          .then(() => {
            this.$toast('Successfully logged in!', {
              color: 'green',
              queueable: false,
              multiLine: true,
              y: 'top',
              timeout: 2000
            })

            this.$router.push({ name: 'menu' })
          })
          .catch((error) => {
            const errorMessage = error.response.data.error.message

            if (error.response.data) {
              this.$refs.observer.setErrors({
                email: [errorMessage]
              })
            }
          })
          .finally(() => {
            this.setLoading(false)
          })
      }
    }
  }
}
</script>
