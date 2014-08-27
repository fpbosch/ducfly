/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res) {
		console.log('EOOOOOOOO');
		res.view({_layoutFile: '../themes/test1/layout.ejs' });
	},
	_config: {}

};

