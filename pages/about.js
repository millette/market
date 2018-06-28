'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const About = () => <Fragment>
  <Header title='À propos' />
  <section className='section'>
    <div className='container'>
      <div className='content'>
        <p>
          Vous voulez <b>prendre de bonnes habitudes</b> et
          vous <b>débarrasser des mauvaises</b>? Ce service est pour vous!
        </p>
        <div className='columns'>
          <div className='column'>
            <h3 className='title is-3'>Inscription</h3>
            <p>
              L’inscription au site est gratuite et prend 30 secondes.
              La seule information exigée est un nom d’utilisateur
              et un mot de passe pour vous connecter.
            </p>
          </div>
          <div className='column'>
            <h3 className='title is-3'>Créer un premier <i>punch</i></h3>
            <p>
              Une fois connecté, vous pouvez créer votre premier <i>punch</i>.
              Un <i>punch</i> est une habitude que vous voulez mieux gérer.
            </p>
          </div>
          <div className='column'>
            <h3 className='title is-3'>Puncher</h3>
            <p>
              Quand l’habitude se présente, il suffit de <i>puncher</i> l’habitude.
              Vous pouvez gérer plusieurs habitudes, bien sûr.
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
            <a target='_blank' href='https://github.com/millette/glassjaw-v5'>
              <h3 className='title is-3'>Crédits</h3>
            </a>
            <p>
              Les sources du logiciel utilisé par ce service sont disponibles sur GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(About)
