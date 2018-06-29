'use strict'

/*
Custom config for Next.js

next-build-id is used to display the current commit hash
in the exported website footer.

withProgressBar adds a progress bar to webpack builds.
*/

const nextBuildId = require('next-build-id')
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar({
  generateBuildId: async () => {
    const fromGit = await nextBuildId({ dir: __dirname })
    return fromGit.id
  }
})
