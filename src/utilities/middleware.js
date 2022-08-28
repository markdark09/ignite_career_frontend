import store from '../store'

export const AUTHENTICATED = (to, from, next) => {
  if (!store.getters['auth/authenticated']) {
    return next({
      name: 'login'
    })
  }

  next()
}

export const NOTAUTHENTICATED = (to, from, next) => {
  if (store.getters['auth/authenticated']) {
    return next({
      name: 'dashboard'
    })
  }

  next()
}
