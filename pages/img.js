'use strict'

// Frontpage, description is taken from package.json

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import ImageUploader from '../shared/components/image-uploader'

class Img extends Component {
  render () {
    return <Fragment>
      <Header title='Img' />
      <section className='section'>
        <div className='container'>
          <ImageUploader />
        </div>
      </section>
    </Fragment>
  }
}

export default withRematch(initStore)(Img)
