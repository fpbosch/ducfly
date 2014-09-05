/**
 * FileController
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
/*var fs = require('fs');
var busboy = require('connect-busboy');
var formidable = require('formidable');*/

var uuid = require('node-uuid'),
    path = require('path');

module.exports = {
    
  	upload: function  (req, res) {

  		console.log('Entrem aqui');
  		req.file('avatar').upload(function (err, files) {
      	
  			console.log('Entrem aqui 2');
      		if (err)
        		return res.serverError(err);

        	console.log(files);

			return res.json({
				message: files.length + ' file(s) uploaded successfully!',
				files: files
			});
			
	    });

  		/*console.log('Arribem aqui'+sails.config.appPath + "/public/files/");

		var results = [],
        streamOptions = {
          dirname: sails.config.appPath + "/public/files/",
          saveAs: function(file) {
          	sails.log.debug('files saveas');
            var filename = file.filename,
                newName = uuid.v4() + path.extname(filename);
            return newName;
          },
          completed: function(fileData, next) {

          	sails.log.debug('document completed');
            Document.create(fileData).exec(function(err, savedFile){
              if (err) {
                next(err);
              } else {
                results.push({
                  id: savedFile.id,
                  url: '/files/' + savedFile.localName
                });
                next();
              }
            });
          }
        };

	    req.file('docs').upload(Uploader.documentReceiverStream(streamOptions),
	      function (err, files) {
	        if (err) return res.serverError(err);

	        res.json({
	          message: files.length + ' file(s) uploaded successfully!',
	          files: results
	        });
	      }
	    );*/


  		//console.log(req.files);
  		//console.log(req.files.file.path);

  		/*var form = new formidable.IncomingForm();

	    form.parse(req, function(err, fields, files) {
	    	console.log('EOOO: '+files);  
	    	res.json({'status':'ok','message':req.files.file.path}, 200);
	      
	    });*/



  		/*fs.readFile(req.files.file.path, function (err, data) {
      	
      	  var newPath = '../../uploads/hello.jpg';

	      console.log('New Path: '+newPath);
	      //console.log('Data: '+data);
	      
	      fs.writeFile(newPath, data, function (err) {
	        res.json({'status':'ok','message':req.files.file.path}, 200);
	      });
	    
	    });*/

  		/*req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
		    console.log('file', filename);
		    file.resume();
		});
		
		req.busboy.on('field', function(key, value, keyTruncated, valueTruncated) {
		    console.log('field', key, value);
		});
		
		req.busboy.on('finish', function() {
		    console.log('OVER!');
		    res.send('OK!');
		});
		
		req.pipe(req.busboy);*/
  		
  		/*req.file('avatar').upload(function (err, uploadedFiles) {
		  if (err) return res.send(500, err);
		  return res.json({
		    message: uploadedFiles.length + ' file(s) uploaded successfully!',
		    files: uploadedFiles
		  });
		});*/

    	/*req.files('avatar').upload(function (err, files) {
	      	if (err)
	        	return res.serverError(err);

			return res.json({
	        	message: files.length + ' file(s) uploaded successfully!',
				files:files
			});
		});*/
    },
	_config: {}

  
};
