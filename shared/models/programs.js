'use strict'

// WIP
import * as data from '../../data/programmes.json'

export default {
  state: data
    // .filter((x) => x.code_programme.toUpperCase() === '570E0')
    // .filter((x) => x.code_programme.toUpperCase().indexOf('570') === 0)
    // .filter((x) => x.code_programme.toUpperCase().indexOf('57') === 0)
    // .filter((x) => (x.description.toLowerCase().indexOf('design') !== -1) || (x.commentaires.toLowerCase().indexOf('design') !== -1))
    // .filter((x) => x.famille.code === 'TAR')
    .map((x) => {
      return {
        ...x,
        description: x.description
          .replace(/<h1>.*?<\/h1>/g, '')
          .replace(/(<p>|<\/p>)/g, '')
          .split('\n')
          .map((y) => y.trim())
          .filter(Boolean),
        commentaires: x.commentaires
          .split('\n')
          .map((y) => y.trim())
          .filter(Boolean)
      }
    }),
  reducers: {
    // login: (state, payload) => ({ ...payload, loginAt: Date.now() }),
  },
  effects: {
    /*
    loginAsync (name, rootState) {
      return this.login({ name })
    }
    */
  }
}
