'use strict'

// adapted from react-dropzone/src/utils/styles.js

const obj = {
  rejected: {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee'
  },
  disabled: {
    opacity: 0.5
  },
  active: {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  },
  default: {
    maxWidth: '400px',
    padding: '1em',
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
  }
}

obj.accepted = { ...obj.active }

export default obj
