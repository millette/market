'use strict'

// WIP
import * as data from '../../data/programmes.json'
import sanitize from 'sanitize-html'

const saneOpts = {
  allowedTags: ['br', 'p', 'b', 'i', 'em', 'strong', 'ul', 'ol', 'li'],
  exclusiveFilter: (frame) => (frame.tag !== 'br') && !frame.text.trim()
}

const sane = (x) => sanitize(x.replace(/\n/g, '<br />'), saneOpts)
  .replace(/'/g, '’')

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
        d2: sane(x.description),
        /*
        sanitize(x.description.replace(/\n/g, '<br />'), {
          allowedTags: ['br', 'p', 'b', 'i', 'em', 'strong', 'ul', 'ol', 'li'],
          exclusiveFilter: (frame) => (frame.tag !== 'br') && !frame.text.trim()
        }).replace(/'/g, '’'),
        */
        description: x.description
          .replace(/<h1>.*?<\/h1>/g, '')
          .replace(/(<p>|<\/p>)/g, '')
          .split('\n')
          .map((y) => y.trim())
          .filter(Boolean),
        c2: sane(x.commentaires),
        /*
        c2: sanitize(x.commentaires.replace(/\n/g, '<br />'), {
          allowedTags: ['br', 'p', 'b', 'i', 'em', 'strong', 'ul', 'ol', 'li'],
          exclusiveFilter: (frame) => (frame.tag !== 'br') && !frame.text.trim()
        }).replace(/'/g, '’'),
        */
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
