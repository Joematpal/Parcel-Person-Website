import authCtrl from './controller'
import passport from 'passport'

export default function(app) {
  app.route('/' )
    .get( authCtrl.auth );

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/welcome');
    });
}