/**
* Menus.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	connection: 'someMongodbServer',
	attributes: {

	},
	beforeCreate: function (values, cb) {

  		Users.findOne({token:values.access_token}).exec(function(err, _item) {	

  			if(err) return cb(err);
  			
  			delete values.access_token;
  			
        	values.author = _item.username;

  			cb();

  		});

  }

};

