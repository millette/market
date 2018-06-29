'use strict'

// Profile page, for a logged-in user

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Me = (props) => {
  return (
    <Fragment>
      <Header title='Profile' />
      <section className='section'>
        <div className='container'>
          <p>Salut {props.auth.name}.</p>
          <pre>{JSON.stringify(props.auth, null, '  ')}</pre>
        </div>
      </section>
    </Fragment>
  )
}

const mapState = state => ({ auth: state.auth })

export default withRematch(initStore, mapState)(Me)
