'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Classes = (props) => <Fragment>
  <Header title='Classes' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.classes, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ classes: state.classes })

export default withRematch(initStore, mapState)(Classes)
