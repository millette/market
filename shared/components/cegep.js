'use strict'

import React, { Fragment } from 'react'
import Link from 'next/link'

const Cegep = (props) => <div className='content box'>
  <Link href={{ pathname: '/cegeps', query: { cegep: props.code_college } }}><a>
    <h2 className='title is-2'>{props.nom_long}</h2>
    <h3 className='subtitle is-3'>{props.code_college}</h3>
  </a></Link>

  <h4 className='title is-4'>Langue d’enseignement</h4>
  <p>{props.langue_enseignement.libelle}</p>

  <h4 className='title is-4'>Site web</h4>
  <p><a target='_blank' href={props.site_web}>{props.site_web}</a></p>

  <h4 className='title is-4'>Contact</h4>
  <p><a target='_blank' href={props.url_contact}>{props.url_contact}</a></p>

  <h4 className='title is-4'>Description</h4>
  <p>{props.description}</p>

  <h4 className='title is-4'>Programmes</h4>
  <ul>
    {props.programmes.map((x) => <li key={x}>
      <Link href={{ pathname: '/programmes', query: { programme: x } }}><a>
        {props.programs[x] || <b>{x}</b>}
      </a></Link>
    </li>)}
  </ul>

  <h4 className='title is-4'>Taille</h4>
  <p>{`${props.taille.libelle}: ${props.taille.value}`}</p>

  <h4 className='title is-4'>Réseaux sociaux</h4>
  <ul>
    {props.reseaux_sociaux.map((x, i) => <li key={i}>
      <a target='_blank' href={x.adresse}>{x.type}</a>
    </li>)}
  </ul>

  <h4 className='title is-4'>Portes ouvertes</h4>
  <ul>
    {props.portes_ouvertes.map((x, i) => <li key={i}>{x}</li>)}
  </ul>

  <h4 className='title is-4'>Payé</h4>
  <p>{props.paye ? 'vrai' : 'faux'}</p>

  <h4 className='title is-4'>Membre ASE</h4>
  <p>{props.membre_ase ? 'vrai' : 'faux'}</p>

  <h4 className='title is-4'>Présence de résidences</h4>
  <p>{props.presence_residences ? 'vrai' : 'faux'}</p>

  <h4 className='title is-4'>Organisme  Régional d’admission</h4>
  <p>{props.organisme_regional_admission}</p>

  <h4 className='title is-4'>Lien d’admission</h4>
  <p><a target='_blank' href={props.lien_admission.url}>{props.lien_admission.description}</a></p>

  <h4 className='title is-4'>Équipes sportives</h4>
  <ul>
    {props.equipes_sportives.map((x, i) => <li key={i}>{x}</li>)}
  </ul>

  <h4 className='title is-4'>Adresse</h4>
  <p>
    {props.adresse.map((x, i) => <Fragment key={i}>{x}<br /></Fragment>)}
    {props.region.libelle}
  </p>

  <h4 className='title is-4'>Téléphone</h4>
  <p>{props.no_telephone}</p>
</div>

export default Cegep
