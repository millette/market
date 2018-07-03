'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Profs = (props) => <Fragment>
  <Header title='Professeurs' />
  <section className='section'>
    <div className='container'>
      <pre>{JSON.stringify(props.teachers, null, '  ')}</pre>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ teachers: state.teachers })

export default withRematch(initStore, mapState)(Profs)
