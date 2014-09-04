/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
var passport = require('passport');

module.exports = function(req, res, next) {

	passport.authenticate('bearer', { session: false },
  		function(err, user, info) {

  	  		if (err) return next(err);
	    	if (user) return next();

	    	return res.json({message: "You are not permitted to perform this action.", status:'error'}, 500);

  	})(req, res);
  
  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  //if (req.session.authenticated) {
  //  return next();
  //}

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
};
