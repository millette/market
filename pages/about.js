'use strict'

/*
About page, description and repository come from package.json

repository must be a github repository, in the form USERNAME/REPONAME
*/

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'
import { repository, description } from '../package.json'

const About = () => <Fragment>
  <Header title='À propos' subtitle={description.slice(0, -1)} />
  <section className='section'>
    <div className='container'>
      <div className='columns'>
        <div className='column'>
          <h3 className='title is-3'>Inscription</h3>
          <p>
            L’inscription au site est simple et rapide.
          </p>
        </div>
        <div className='column'>
          <h3 className='title is-3'>Professeurs</h3>
          <p>
            Le professeur peut gérer plusieurs cours à plusieurs sessions.
          </p>
        </div>
        <div className='column'>
          <h3 className='title is-3'>Étudiants</h3>
          <p>
            L’étudiant peut être inscrit à plusieurs cours à la fois
            et aura aussi accès aux informations des sessions précédentes.
          </p>
        </div>
      </div>
      <div className='columns'>
        <div className='column'>
          <h3 className='title is-3'>Vie privée</h3>
          <p>
            Toutes les informations demeurent privées et seulement accessibles
            au détenteur du compte.
          </p>
        </div>
        <div className='column'>
          <h3 className='title is-3'>Nous contacter</h3>
          <p>
            Utilisez le formulaire pour nous contacter ou envoyez nous un email.
          </p>
        </div>
        <div className='column'>
          <a target='_blank' href={`https://github.com/${repository}`}>
            <h3 className='title is-3'>Crédits</h3>
          </a>
          <p>
            Les sources du logiciel utilisé par ce service sont disponibles sur GitHub.
          </p>
        </div>
      </div>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(About)
