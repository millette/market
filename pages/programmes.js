'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import Programme from '../shared/components/programme'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

// <pre>{JSON.stringify(props.programs, null, '  ')}</pre>

const Cours = (props) => <Fragment>
  <Header title='Programmes' subtitle={`Nombre: ${props.programs.length}`} />
  <section className='section'>
    <div className='container'>
      <div className='columns is-multiline'>
        {props.programs.map((x, i) => <div className='column is-half'>
          <Programme key={i} {...x} />
        </div>)}
      </div>
    </div>
  </section>
</Fragment>

const mapState = (state) => ({ programs: state.programs })

export default withRematch(initStore, mapState)(Cours)
