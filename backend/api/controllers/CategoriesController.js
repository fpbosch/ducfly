/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	find : function(req, res) {

		//var params = req.allParams();

		Categories.watch(req.socket);
		
		Categories.find({}).exec(function created(err,categories){

			if (err) return res.json({'status':'error'}, 500);

			if (categories) {

				//Categories.subscribe(req.socket,categories,'create');
				//Categories.publishCreate(categories);
    	

				return res.json(categories, 200);				
			
			}
        
    	}); 

	},
	create : function(req, res) {

		var params = req.allParams();

		console.log(JSON.stringify(params));
		
		Categories.create(params).exec(function created(err,category){

			if (req.isSocket) 
				sails.log.debug('YES IS SOCKET');

			sails.log.debug('The category: '+JSON.stringify(category));
            Categories.publishCreate(category);
    		//Categories.publishCreate({id:1500,name:'hola'});
    		//Categories.subscribe(req.socket,Categories,'create');

    	}); 

	},
	update : function(req, res) {

		var id = req.param('id');
		var reqBody = req.body;

		console.log('ID TO UPDATE: '+id+' REQ BODY: '+JSON.stringify(req.body));

		Categories.update({id:id},req.body).exec(function update(err,updated){

			Categories.publishUpdate(updated[0].id, updated[0]);
		
		});
	
	},
	destroy : function(req, res) {

		var id = req.param('id');

		sails.log.debug('DELETE CATEGORY ID: '+id);

		Categories.destroy({id:id}).exec(function destroy(err){
			
			Categories.publishDestroy(id);		
			
		});
	
	},
};

