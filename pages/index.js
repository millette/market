'use strict'

// Frontpage, description is taken from package.json

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import Link from 'next/link'
import { description } from '../package.json'

const Home = () => <Fragment>
  <Header title='Accueil' subtitle={description.slice(0, -1)}>
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
      <div className='content'>
        <div className='columns'>
          <div className='column'>
            <h3 className='title is-3'>Portfolio visuel</h3>
            <p>
              Pratique pour tout enseignement sur le design
              et les autres domaines du visuel.
            </p>
          </div>
          <div className='column'>
            <h3 className='title is-3'>Professeurs</h3>
            <p>
              Pourra évaluer les exercices et en exposer une sélection.
            </p>
            <ul>
              <li>Gestion de plusieurs classes</li>
              <li>Gestion de plusieurs cours</li>
            </ul>
          </div>
          <div className='column'>
            <h3 className='title is-3'>Étudiants</h3>
            <p>
              Pourra soumettre ses travaux et obtenir ses résultats.
            </p>
            <ul>
              <li>Peut participer à plusieurs cours</li>
            </ul>
          </div>
        </div>
        <h3 className='title is-3'>Hierarchie</h3>
        <p>
          Le site répertorie tous les programmes du niveau collégial
          de toutes les institutions québécoises.
        </p>
        <nav className='breadcrumb has-arrow-separator is-centered' aria-label='breadcrumbs'>
          <ul>
            <li><Link href='/programmes'><a>Programme</a></Link></li>
            <li><Link href='/cegeps'><a>CÉGEP</a></Link></li>
            <li><Link href='/'><a>Session</a></Link></li>
            <li><Link href='/profs'><a>Professeur</a></Link></li>
            <li><Link href='/cours'><a>Cours</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(Home)
