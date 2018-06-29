'use strict'

// Frontpage, description is taken from package.json

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import { description } from '../package.json'

const Home = () => <Fragment>
  <Header title='Accueil' subtitle='Prototype'>
    <p className='is-italic'>
      <b>ATTENTION</b> Pour tester ce site, ne rechargez pas la page
      à moins de vouloir remettre les valeurs à neufs.
      Les données ne sont ni transmises, ni sauvegardées.
    </p>
    <p>
      <b>Il ne s’agit que d’une démonstration éphémère</b>.
    </p>
  </Header>
  <section className='section'>
    <div className='container'>
      <p>{description}</p>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(Home)
