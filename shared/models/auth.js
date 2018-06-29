'use strict'

export default {
  state: { },
  reducers: {
    login: (state, payload) => ({ ...payload, loginAt: Date.now() }),
    logout: (state) => {
      const loginOut = Date.now()
      return {
        loginOut,
        lasted: Math.round((loginOut - state.loginAt) / 1000)
      }
    }
  },
  effects: {
    loginAsync (name, rootState) {
      return this.login({ name })
    }
  }
}
