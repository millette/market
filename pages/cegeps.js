'use strict'

// Cegeps page

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Cegeps = (props) => {
  const only = (x) => !props.cegep || x.code_college === props.cegep

  return <Fragment>
    <Header title='CÉGEPS' subtitle={`Nombre: ${props.cegeps.length}`} />
    <section className='section'>
      <div className='container'>
        <pre>{JSON.stringify(props.cegeps.filter(only), null, '  ')}</pre>
      </div>
    </section>
  </Fragment>
}

Cegeps.getInitialProps = ({ query: { cegep } }) => ({ cegep })

const mapState = (state) => ({ cegeps: state.cegeps })

export default withRematch(initStore, mapState)(Cegeps)
