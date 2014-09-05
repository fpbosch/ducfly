/**
 * MenusController
 *
 * @description :: Server-side logic for managing menus
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	find : function(req, res) {

		//var params = req.allParams();

		Menus.watch(req.socket);
		
		Menus.find({}).sort('order ASC').exec(function created(err, menus){

			if (err) return res.json({'status':'error'}, 500);

			if (menus) {

				//Categories.subscribe(req.socket,categories,'create');
				//Categories.publishCreate(categories);
    
				return res.json(menus, 200);				
			
			}
        
    	}); 

	},
	create : function(req, res) {

		var params = req.allParams();
		/*var params = {
			name:'hola'
		};*/

		console.log('ELS PARAMS: '+JSON.stringify(params));
		
		Menus.create(params).exec(function created(err,menu){

			if (req.isSocket) 
				sails.log.debug('YES IS SOCKET');

			sails.log.debug('The menu: '+JSON.stringify(menu));
            //Menus.publishCreate(menu);
    		
    	}); 

	},
	destroyByPosition : function(req, res) {

		var position = req.param('id');

		sails.log.debug('DELETE MENU POSITION: '+position);

		Menus.destroy({position:position}).exec(function destroy(err){
			console.log('ENTREM AQUI');
			res.json({'status':'ok'}, 200);
			//Menus.publishDestroy(id);		
			
		});
	
	}
};

