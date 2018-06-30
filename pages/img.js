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
          <div className='columns'>
            <div className='column'>
              <Dropzone onDrop={this.onDrop} accept={['image/png', 'image/jpeg']}>
                {this.state.files.length ? this.state.files.map(({ name, preview }) => <img key={name} src={preview} />) : <p>Envoyer des images</p>}
              </Dropzone>
            </div>
            <div className='column'>
              {this.state.files.map((f) => <div key={f.name}>
                <h5 className='title is-5 is-marginless'>{f.name}</h5>
                <ul style={{ marginBottom: '1em' }}>
                  <li><b>lastModified: </b>{new Date(f.lastModified).toISOString()}</li>
                  {f.lastModifiedDate && <Fragment>
                    <li><b>lastModifiedDate: </b>{new Date(f.lastModifiedDate).toISOString()}</li>
                  </Fragment>}
                  {f.webkitRelativePath && <Fragment>
                    <li><b>webkitRelativePath: </b>{f.webkitRelativePath}</li>
                  </Fragment>}
                  <li><b>size: </b>{f.size}</li>
                  <li><b>type: </b>{f.type}</li>
                </ul>
              </div>)}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  }
}

export default withRematch(initStore)(Img)
