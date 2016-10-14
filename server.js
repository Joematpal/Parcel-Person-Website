import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import config from './config/config.js';
import _ from 'underscore';

const app = express();
const port = 5050;

//mongoose
import mongoose from 'mongoose';
import User from './server/features/auth/User';
const mongoUri = config.mlab.mongoUri;
mongoose.connect(mongoUri);
mongoose.connection.once('open', () => console.log(`Conneted to MongoDB at ${mongoUri}`));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(`${__dirname}/public`))

passport.use(new GoogleStrategy({
    clientID: config.gleAuth.client_id,
    clientSecret: config.gleAuth.client_secret,
    callbackURL: config.gleAuth.redirect_uris
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile)
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
