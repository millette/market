'use strict'

import React, { Fragment } from 'react'
import { repository } from '../../package.json'

const BuildLink = ({ buildId }) => {
  if (buildId === '-') { return <i>dev</i> }
  const buildUrl = `https://github.com/${repository}/tree/${buildId}`

  return <Fragment>
    commit: <a target='_blank' href={buildUrl}>{buildId}</a>
  </Fragment>
}

export default BuildLink
