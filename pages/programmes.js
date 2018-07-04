'use strict'

// State page, ouput the whole app state

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import Programme from '../shared/components/programme'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Link from 'next/link'
import uniq from 'lodash.uniqby'

const Programmes = (props) => {
  const only = (x) => !props.famille || x.famille.code === props.famille
  let cur = 'Tous'

  const z2 = props.programs.map((x) => {
    if (x.famille.code === props.famille) {
      cur = x.famille.libelle
    }
    return x.famille
  })

  const z = uniq(z2, 'code')
    .map((x) => <Link key={x.code} href={{ pathname: '/programmes', query: { famille: x.code } }}>
      <a className={`button is-small ${cur === x.libelle ? 'is-info' : 'is-warning'}`}>
        {x.libelle}
      </a>
    </Link>)

  return <Fragment>
    <Header title='Programmes' subtitle={`${cur}: ${props.programs.filter(only).length} sur ${props.programs.length}`} />
    <section className='section'>
      <div className='container'>
        <div className='buttons'>{z}</div>
        <div className='columns is-multiline'>
          {props.programs.filter(only).map((x) => <div key={x.code_programme} className='column is-half'>
            <Programme {...x} />
          </div>)}
        </div>
      </div>
    </section>
  </Fragment>
}

Programmes.getInitialProps = ({ query: { famille } }) => ({ famille })

const mapState = (state) => ({ programs: state.programs })

export default withRematch(initStore, mapState)(Programmes)
