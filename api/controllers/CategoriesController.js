/**
 * CategoriesController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create : function(req, res) {

		var params = req.allParams();

		Categories.create(params).exec(function created(err,categorie){

            Categories.publishCreate(categorie);
    	
    	}); 

	},
	update : function(req, res) {

		var id = req.param('id');
		var reqBody = req.body;

		Categories.update({id:id},req.body).exec(function update(err,updated){

			Categories.publishUpdate(updated[0].id, updated[0]);
		
		});
	
	},
};

