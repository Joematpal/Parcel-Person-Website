import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from './config/config.js';
import mongoose from 'mongoose';
import _ from 'underscore';

const app = express();
const port = 5050;

const mongoUri = config.mlab.mlabUri;

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`))

passport.use(new GoogleStrategy({
    clientID: config.gleAuth.web.client_id,
    clientSecret: config.gleAuth.web.client_secret,
    callbackURL: config.gleAuth.web.cBurl
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


import masterRoutes from "./server/masterRoutes.js";
masterRoutes(app)

app.listen( port, () => console.log('listening on port '+ port) );