'use strict';

var reedsyBookServices = angular.module('reedsyBookServices', ['ngResource']);


//service to pass book data between controllers and views
reedsyBookServices.service('bookSelect', function(){
  //the book for the detail page
  this.currentBookObj;
    //returns value
    this.getProperty = function () {
      return this.currentBookObj;
    };
    //sets value;
    this.setProperty = function(currValue) {
      this.currentBookObj = currValue;
    };

});

reedsyBookServices.factory('Book', ['$resource',
  function($resource){
    return $resource('books/books.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);