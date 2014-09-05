/**
 * FrontPagesController
 *
 * @description :: Server-side logic for managing Frontpages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	getAllFr: function(req,res) {

		FrontPages.native(function(err, collection) {
	
			collection.lrange('pages:newest', 0, 10, function (err, items) {
											
				//sails.log.debug('publish id '+itemId);
				sails.log.debug('items api controller: '+JSON.stringify(items));

				var test;
				var parsedItems = [];
				
				for(aux in items) {
					sails.log.debug('items api controller: '+JSON.parse(JSON.stringify(items[aux])));
					test = JSON.parse(items[aux]);
					parsedItems.push(test);
					sails.log.debug(test.title);
				}

				if (err)
					return res.json({'status':'erro'},500);

				if (items)
					return res.json(parsedItems,200);
				
			});

		});

	},
	getAll: function(req,res) {

		FrontPages.native(function(err, collection) {
	
			collection.hset('page:'+_item[0].id, 'body', _item[0].body , function (err, auxItem) {
											
				sails.log.debug('publish id '+itemId);
				sails.log.debug('items '+JSON.stringify(auxItem));

				if (err)
					return res.json({'status':'erro'},500);

				if (auxItem)
					return res.json({'item':_item[0]},200);
				
			});

		});

	},    	
};

