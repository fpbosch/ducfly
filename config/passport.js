// Location: /config/passport.js
var passport    = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    BearerStrategy = require('passport-http-bearer').Strategy,
    bcrypt = require('bcrypt'),
    uuid = require('node-uuid');

passport.serializeUser(function(user, done) {
  done(null, user[0].id);
});

passport.deserializeUser(function(id, done) {
  Users.findById(id, function (err, user) {
    done(err, user);
  });
});

//This is to accept request with a validated token
passport.use(new BearerStrategy(

    function(token, done) {
        
        sails.log.debug('token: '+token);
  
        Users.findOne({ token: token }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }

));
    
//This is to validate local logins
passport.use(new LocalStrategy(
  function(username, password, done) {
    sails.log.debug(username);
    Users.find({'username':username}).exec(function(err, user) {
      if (err) { return done(null, err); }
      if (!user || user.length < 1) { return done(null, false, { message: 'Incorrect User'}); }
      
      bcrypt.compare(password, user[0].password, function(err, res) {
        if (!res) return done(null, false, { message: 'Invalid Password'});
        
        var generatedToken = uuid.v4();
        Users.update({'username':username},{token:generatedToken}).exec(function(err, user) {
    
            return done(null, user);
        
        });

      });
    });
  })
);

module.exports = {
    http: {
    customMiddleware: function(app){
      console.log('express midleware for passport');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
