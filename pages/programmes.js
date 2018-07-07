'use strict'

// Programmes page

import React, { Component, Fragment } from 'react'
import Header from '../shared/components/header'
import Programme from '../shared/components/programme'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Link from 'next/link'
import uniq from 'lodash.uniqby'

class Programmes extends Component {
  constructor (props) {
    super(props)
    this.state = { any: false }
    this.toggleAny = this.toggleAny.bind(this)
  }

  toggleAny () {
    this.setState({ any: !this.state.any })
  }

  render () {
    let cur = 'Tous' // hmm

    const only = (x) => {
      let found = this.state.any

      if (!found) {
        x.description.forEach((y) => {
          if ((y.toLowerCase().indexOf('infographie') !== -1) || (y.toLowerCase().indexOf('expression personnelle') !== -1) || (y.toLowerCase().indexOf('dessin') !== -1) || (y.toLowerCase().indexOf('portfolio') !== -1)) { found = true }
        })
      }

      if (!found) {
        x.commentaires.forEach((y) => {
          if ((y.toLowerCase().indexOf('dessin') !== -1) || (y.toLowerCase().indexOf('portfolio') !== -1)) { found = true }
        })
      }

      if (this.props.famille) {
        return found && (x.famille.code === this.props.famille)
      }
      if (this.props.programme) {
        if (x.code_programme === this.props.programme) {
          cur = x.nom
          return true
        }
        return false
      }
      return found
    }

    const z2 = this.props.programs.map((x) => {
      if (x.famille.code === this.props.famille) {
        cur = x.famille.libelle
      }
      return x.famille
    })

    const buttons = uniq(z2, 'code')
      .map((x) => <Link key={x.code} href={{ pathname: '/programmes', query: { famille: x.code } }}>
        <a className={`button is-small ${cur === x.libelle ? 'is-info' : 'is-warning'}`}>
          {x.libelle}
        </a>
      </Link>)

    const allPrograms = this.props.programs.filter(only)

    const nStudents = allPrograms.reduce((v, x) => v + ((x.statistiques_admission.automne && x.statistiques_admission.automne.tous_admis) || 0) + ((x.statistiques_admission.hiver && x.statistiques_admission.hiver.tous_admis) || 0), 0)

    return <Fragment>
      <Header title='Programmes' subtitle={`${cur}: ${allPrograms.length} sur ${this.props.programs.length}`} />
      <section className='section'>
        <div className='container'>
          <div className='buttons'>
            <button className={`button is-small ${this.state.any ? 'is-danger' : 'is-warning'}`} type='button' onClick={this.toggleAny}>ANY</button>
            {buttons}
          </div>
          {(nStudents > 0) && <div className='content'>
            <p>Nombre total d’étudiants: <b>{nStudents}</b>; max <b>{nStudents * 20}&nbsp;$</b> par session; max <b>{nStudents * 20 * 2}&nbsp;$</b> par an.</p>
          </div>}
          <div className='columns is-multiline'>
            {allPrograms.map((x) => <div key={x.code_programme} className={`column${this.props.programme ? '' : ' is-half'}`}>
              <Programme multi={!this.props.programme} cegeps={this.props.cegeps.filter((z) => z.programmes.indexOf(x.code_programme) !== -1)} {...x} />
            </div>)}
          </div>
        </div>
      </section>
    </Fragment>
  }
}

Programmes.getInitialProps = ({ query: { famille, programme } }) => ({ famille, programme })

const mapState = (state) => ({ programs: state.programs, cegeps: state.cegeps })

export default withRematch(initStore, mapState)(Programmes)
