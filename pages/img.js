'use strict'

// Frontpage, description is taken from package.json

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Dropzone from 'react-dropzone'

class Img extends Component {
  constructor () {
    super()
    this.state = { files: [] }
    this.onDrop = this.onDrop.bind(this)
  }

  cleanup () {
    if (window && window.URL && window.URL.revokeObjectURL) {
      this.state.files.forEach(({ name, preview }) => {
        console.log('ciao', name)
        window.URL.revokeObjectURL(preview)
      })
    }
  }

  componentWillUnmount () { this.cleanup() }

  onDrop (files) {
    this.cleanup()
    this.setState({ files })
  }

  render () {
    return <Fragment>
      <Header title='Img' />
      <section className='section'>
        <div className='container'>
          <p>
            On va uploader une image...
          </p>
          {this.state.files.map((f) => <Fragment key={f.name}>
            lastModified: {f.lastModified}<br />
            {f.lastModifiedDate && <Fragment>lastModifiedDate: {f.lastModifiedDate}<br /></Fragment>}
            name: {f.name}<br />
            {f.webkitRelativePath && <Fragment>webkitRelativePath: {f.webkitRelativePath}<br /></Fragment>}
            size: {f.size}<br />
            type: {f.type}<br />
          </Fragment>)}
          <Dropzone onDrop={this.onDrop}>
            {this.state.files.map(({ name, preview }) => <img key={name} src={preview} />)}
          </Dropzone>
        </div>
      </section>
    </Fragment>
  }
}

export default withRematch(initStore)(Img)
