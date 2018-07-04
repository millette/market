'use strict'

// Cegeps page

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Cegeps = (props) => <Fragment>
  <Header title='CÉGEPS' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.cegeps, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ cegeps: state.cegeps })

export default withRematch(initStore, mapState)(Cegeps)
