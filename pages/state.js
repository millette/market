'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const State = (props) => <Fragment>
  <Header title='State' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.fullState, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ fullState: { ...state } })

export default withRematch(initStore, mapState)(State)
