'use strict'

export default {
  state: { },
  reducers: {
    login: (state, payload) => ({ ...state, ...payload }),
    logout: (state) => ({ })
  },
  effects: {
    loginAsync (name, rootState) {
      return this.login({ name })
    }
  }
}
