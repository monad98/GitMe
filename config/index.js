/**
 * Created by Hyungwu Pae on 5/3/17.
 */
'use strict';

const path = require('path');

module.exports = {
  root: path.normalize(__dirname + '/../'),
  // Secret for session
  secrets: process.env.SECRETS,

  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: "http://localhost:8000/api/auth/github/callback",
    scope: [ 'user:email']
  },

};