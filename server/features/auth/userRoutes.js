import userCtrl from './userCtrl'
import passport from 'passport'

export default function(app) {

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/#/welcome');
    });

  app.get('/auth',
    userCtrl.findOneUser,
    userCtrl.saveUser
  );

}
