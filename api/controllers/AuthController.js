/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require("passport");

module.exports = {
	
	login: function(req,res){
	    res.view("auth/login");
	},
	process: function(req,res){

		sails.log.debug('process called');

	    passport.authenticate('local', function(err, user, info){
	    
	    	sails.log.debug(user);

			if ((err) || (!user)) {
				return res.json({'status':'error'},500);
			}

			req.logIn(user, function(err){
	        	sails.log.debug('ARA SESSION: '+JSON.stringify(req.session));
				sails.log.debug('ARA SESSION: '+JSON.stringify(passport.session()));
	        
				if (err) res.json({'status':'error'},500);
				return res.json({'item':user},200);
			});
			
	    })(req, res);
	},
	logout: function (req,res){
	    req.logout();
	    res.send('logout successful');
	}

};

