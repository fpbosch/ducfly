/**
 * NewsLetterController
 *
 * @description :: Server-side logic for managing Newsletters
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var MailChimpAPI = require('mailchimp').MailChimpAPI;
	
module.exports = {
	create: function(req, res) {
		
		var api = new MailChimpAPI('c5d499c4b21f9215f065af40615e8128-us7', { version : '2.0' });
		var email = req.param('email');
		console.log('The email received: '+email);

	//	var mc = new MailChimpAPI.Mailchimp('c5d499c4b21f9215f065af40615e8128-us7');
		var batchArr = [];
		var aux = {
			email: {
				email:email
			},
			merge_vars: {
		        		EMAIL: email,
		        		FNAME: 'subscriber-first-name',
		       			LNAME: 'subscriber-last-name'
		   	}	
		}

		batchArr.push(aux);

		var mcReq = {
			apikey:'c5d499c4b21f9215f065af40615e8128-us7',
		    id: '7ea6dcd97a',
		    batch: batchArr
		};

		console.log(mcReq);

		api.call('lists', 'batch-subscribe', mcReq, function (error, data) {
	    	if (error)
    	    	console.log(error.message);
		    else
		        console.log(JSON.stringify(data)); // Do something with your data!
		});

	}	
};

