define(['./module'], function (controllers) {
	'use strict';
  controllers.controller('HomeCtrl', ['$rootScope','$scope', '$modal', '$sanitize', 'pagesService', 'menusService','newsLetterService','contactService', function ($rootScope, $scope, $modal, $sanitize, pagesService, menusService, newsLetterService, contactService) {

    $scope.myInterval = 5000;
    $scope.showPreloader = false;
    $scope.groupedItems = [];
    $scope.itemsPerPage = 5;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.hideCongrats = true;

    var slidesRevivews = $scope.slidesReviews = [];

    $scope.addSlideReviews = function(_image, _client, _position, _text) {
        slidesRevivews.push({
          image: _image,
          client: _client,
          position: _position,
          text: _text
        });
    };

    $scope.addSlideReviews('assets/images/person.png',
            'Francesc',
            'Director',
            'Software innovation, like almost every other kind of innovation, requires the ability to collaborate and share ideas with other people, and to sit down and talk with customers and get their feedback and understand their needs.');

    $scope.addSlideReviews('assets/images/person.png',
            'Marta',
            'Directora',
            'Software innovation, like almost every other kind of innovation, requires the ability to collaborate and share ideas with other people, and to sit down and talk with customers and get their feedback and understand their needs.');



    $scope.newsLetter = function(_email) {
    
        var formData = {
            email:_email
        };

        var result = newsLetterService.create(formData).success(function(items) {

            //$scope.showPreloader = false;
    
        }).error(function (data) {
            alert('Houston, we got a problem!');
        });

    }

    $scope.sendContact = function(_name, _phone, _email, _message) {
    
        var formData = {
            name:_name,
            phone:_phone,
            email:_email,
            message:_message
        };

        var result = contactService.create(formData).success(function(items) {
            $scope.hideCongrats = false;
        }).error(function (data) {
            alert('Houston, we got a problem!');
        });

    }


    //Get all menu pages
    var menusResult = menusService.getAll().success(function(items) {
    
        $scope.menus = items;
        console.log(items);
        //Get all front pages
        var pagesResult = pagesService.getAllFr().success(function(items) {

            $scope.items = items;
            console.log(items);

            for (var i = 0; i < $scope.items.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.items[i] ];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.items[i]);
                }
            }

            //$scope.showPreloader = false;
    
        }).error(function (data) {
            alert('Houston, we got a problem!');
        });

    }).error(function (data) {
    
        alert('Houston, we got a problem!');
    
    });

  }]);

});