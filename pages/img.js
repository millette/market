'use strict'

// Frontpage, description is taken from package.json

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Dropzone from 'react-dropzone'
import dropzoneStyles from '../shared/utils/dropzone-styles'

class Img extends Component {
  constructor () {
    super()
    this.state = { files: [] }
    this.onDrop = this.onDrop.bind(this)
  }

  cleanup () {
    if (window && window.URL && window.URL.revokeObjectURL) {
      this.state.files.forEach(({ name, preview }) => window.URL.revokeObjectURL(preview))
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
              <Dropzone
                activeStyle={dropzoneStyles.active}
                acceptStyle={dropzoneStyles.accepted}
                rejectStyle={dropzoneStyles.rejected}
                disabledStyle={dropzoneStyles.disabled}
                style={dropzoneStyles.default}
                onDrop={this.onDrop}
                accept={['image/png', 'image/jpeg']}
              >
                {this.state.files.length ? this.state.files.map(({ name, preview }) => <img key={name} src={preview} />) : <p>Envoyer des images</p>}
              </Dropzone>
            </div>
            <div className='column'>
              {this.state.files.map((f) => <div key={f.name} style={{ marginBottom: '1em' }}>
                <ul>
                  <li><b>{f.name}</b></li>
                  <li>{new Date(f.lastModified).toString()}</li>
                  <li>{Math.round(f.size / 102.4) / 10} KiB</li>
                  <li>{f.type}</li>
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
