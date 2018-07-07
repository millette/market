'use strict'

// Programmes page

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import Programme from '../shared/components/programme'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Link from 'next/link'
import uniq from 'lodash.uniqby'

const Programmes = (props) => {
  let cur = 'Tous' // hmm

  const only = (x) => {
    if (props.famille) {
      return x.famille.code === props.famille
    }
    if (props.programme) {
      if (x.code_programme === props.programme) {
        cur = x.nom
        return true
      }
      return false
    }
    return true
  }

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

  const allPrograms = props.programs.filter(only)

  return <Fragment>
    <Header title='Programmes' subtitle={`${cur}: ${allPrograms.length} sur ${props.programs.length}`} />
    <section className='section'>
      <div className='container'>
        <div className='buttons'>{z}</div>
        <div className='columns is-multiline'>
          {allPrograms.slice(0, 50).map((x) => <div key={x.code_programme} className={`column${props.programme ? '' : ' is-half'}`}>
            <Programme multi={!props.programme} cegeps={props.cegeps.filter((z) => z.programmes.indexOf(x.code_programme) !== -1)} {...x} />
          </div>)}
        </div>
      </div>
    </section>
  </Fragment>
}

Programmes.getInitialProps = ({ query: { famille, programme } }) => ({ famille, programme })

const mapState = (state) => ({ programs: state.programs, cegeps: state.cegeps })

export default withRematch(initStore, mapState)(Programmes)
