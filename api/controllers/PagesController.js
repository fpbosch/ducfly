/**
 * PagesController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
	getAll: function(req,res) {

		Pages.find({}).done(function(err, pages) {	

			console.log('getAll');

			if (err)
				return res.json({'status':'erro'},500);

			if (pages)
				return res.json(pages,200);

			//return res.json([{'id':'1', 'title':'The One','body':'This is the body'},{'id':'2', 'title':'The two','body':'This is the body'}])

		})
	},    
	_config: {}

};
