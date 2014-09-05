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
	publish: function(req,res) {

		var itemId = req.param('id');

		Pages.update({id:itemId},{'publish':true}).exec(function(err, _item) {	

			sails.log.debug(JSON.stringify(_item));

			FrontPages.native(function(err, collection) {

				sails.log.debug('item id for redis: '+_item[0].id);
				sails.log.debug('item body for redis: '+_item[0].body);
				
				//collection.hset('page:'+_item[0].id, 'body', _item[0].body , function (err, auxItem) {
				collection.lpush('pages:newest', JSON.stringify(_item[0]) , function (err, auxItem) {
					
					//collection.hset('page:'+_item[0].id, 'title', _item[0].title , function (err, auxItem) {
											
						sails.log.debug('publish id '+itemId);
						sails.log.debug('items '+JSON.stringify(auxItem));

						if (err)
							return res.json({'status':'erro'},500);

						if (auxItem)
							return res.json({'item':_item[0]},200);
					
					//});

				});

			});

		})

	},    
	_config: {}

};
