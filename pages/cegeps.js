'use strict'

// Cegeps page

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Cegep from '../shared/components/cegep'

const Cegeps = (props) => {
  const only = (x) => !props.cegep || x.code_college === props.cegep

  return <Fragment>
    <Header title='CÉGEPS' subtitle={`Nombre: ${props.cegeps.length}`} />
    <section className='section'>
      <div className='container'>
        {props.cegeps.filter(only).map((x) => <Cegep programs={props.programs} key={x.code_college} {...x} />)}
      </div>
    </section>
  </Fragment>
}

Cegeps.getInitialProps = ({ query: { cegep } }) => ({ cegep })

// const mapState = (state) => ({ cegeps: state.cegeps })
const mapState = (state) => {
  const obj = {
    programs: {},
    cegeps: state.cegeps
  }
  state.programs.forEach((x) => {
    obj.programs[x.code_programme] = x.nom
  })
  return obj
  /*
  return {
    programs: state.programs.map((x) => ({
      nom: x.nom,
      code_programme: x.code_programme
    })),
    cegeps: state.cegeps
  }
  */
}

export default withRematch(initStore, mapState)(Cegeps)
