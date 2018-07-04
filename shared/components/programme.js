'use strict'

import React, { Fragment } from 'react'
import lodashMap from 'lodash.map'

const Programme = (props) => <div className='content box'>
  <h2 className='title is-2'>{props.nom}</h2>
  <h3 className='subtitle is-3'>{props.code_programme}</h3>
  <p>Catégorie: <span className='tag is-info'>{props.categorie.libelle}</span></p>
  <p>Famille: <span className='tag is-primary'>{props.famille.libelle}</span></p>
  <h4 className='title is-4'>Description</h4>
  {props.description.map((p, i) => <p key={i}>
    {p}
  </p>)}
  {props.exigences_du_marche && (props.exigences_du_marche.length > 0) && <Fragment>
    <h4 className='title is-4'>Exigences du marché</h4>
    <ul>
      {props.exigences_du_marche.map((x) => x.trim()).filter(Boolean).map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.milieux_de_travail && (props.milieux_de_travail.length > 0) && <Fragment>
    <h4 className='title is-4'>Milieux de travail</h4>
    <ul>
      {props.milieux_de_travail.map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.postes_offerts && (props.postes_offerts.length > 0) && <Fragment>
    <h4 className='title is-4'>Postes offerts</h4>
    <ul>
      {props.postes_offerts.map((x, i) => <li key={i}>
        {x}
      </li>)}
    </ul>
  </Fragment>}

  {props.statistiques_admission && lodashMap(props.statistiques_admission, (v) => v).filter(Boolean).length > 0 && <Fragment>
    <h4 className='title is-4'>Statistiques d’admission</h4>
    <div className='columns'>
      {lodashMap(props.statistiques_admission, (v, k) => v && <div className='column' key={k}>
        <h5 className='title is-5'>{k}</h5>
        <dl>
          <dt>Tous admis</dt>
          <dd>{v.tous_admis}</dd>
          <dt>Demandes tour 1</dt>
          <dd>{v.demandes_tour1}</dd>
          <dt>Admis tour 1</dt>
          <dd>{v.admis_tour1}</dd>
        </dl>
      </div>)}
    </div>
  </Fragment>}

  <h4 className='title is-4'>Commentaires</h4>
  {props.description.map((p, i) => <p key={i}>
    {p}
  </p>)}
</div>

export default Programme
