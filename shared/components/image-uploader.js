'use strict'

import React, { Component, Fragment } from 'react'
import Dropzone from 'react-dropzone'
import dropzoneStyles from '../utils/dropzone-styles'

class ImageUploader extends Component {
  constructor () {
    super()
    this.state = { files: false, rejected: false }
    this.onDrop = this.onDrop.bind(this)
    this.minSize = this.props.minSize || 10240
    this.maxSize = this.props.maxSize || 6144000
  }

  cleanup () {
    if (this.state.files && window && window.URL && window.URL.revokeObjectURL) {
      this.state.files.forEach(({ name, preview }) => window.URL.revokeObjectURL(preview))
    }
  }

  componentWillUnmount () { this.cleanup() }

  onDrop (files, rejected) {
    this.cleanup()
    this.setState({
      files: files.length ? files : false,
      rejected: rejected.length ? rejected : false
    })
  }

  render() {
    return <div className='columns'>
      <div className='column'>
        <h3 className='title is-3'>Upload</h3>
        <Dropzone
          minSize={this.minSize}
          maxSize={this.maxSize}
          activeStyle={dropzoneStyles.active}
          acceptStyle={dropzoneStyles.accepted}
          rejectStyle={dropzoneStyles.rejected}
          disabledStyle={dropzoneStyles.disabled}
          style={dropzoneStyles.default}
          onDrop={this.onDrop}
          accept={['image/png', 'image/jpeg']}
        >
          {this.state.files ? this.state.files.map(({ name, preview }) => <img key={name} src={preview} />) : <p>Envoyer des images</p>}
        </Dropzone>
      </div>
      {this.state.files && <div className='column'>
        <h3 className='title is-3'>Accepted</h3>
        {this.state.files.map((f) => <div key={f.name} style={{ marginBottom: '1em' }}>
          <ul>
            <li><b>{f.name}</b></li>
            <li>{new Date(f.lastModified).toString()}</li>
            <li>{Math.round(f.size / 102.4) / 10} KiB</li>
            <li>{f.type}</li>
          </ul>
        </div>)}
      </div>}
      {this.state.rejected && <div className='column'>
        <h3 className='title is-3'>Rejected</h3>
        {this.state.rejected.map((f) => <div key={f.name} style={{ marginBottom: '1em' }}>
          <ul>
            <li><b>{f.name}</b></li>
            <li>{new Date(f.lastModified).toString()}</li>
            <li>{Math.round(f.size / 102.4) / 10} KiB <b>{f.size < this.minSize ? 'is too small' : f.size > this.maxSize ? 'is too large' : ''}</b></li>
            <li>{f.type} {(f.type !== 'image/png') && (f.type !== 'image/jpeg') && <b>is wrong type</b>}</li>
          </ul>
        </div>)}
      </div>}
    </div>
  }
}

export default ImageUploader
