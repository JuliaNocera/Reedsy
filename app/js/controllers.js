'use strict';

/* Controllers */
var reedsyBooksControllers = angular.module('bookControllers', []);

//service to pass book data between controllers and views
reedsyBooksControllers.service('bookSelect', function(){
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


reedsyBooksControllers.controller('BookListCtrl', ['$scope', '$http', 'bookSelect', '$rootScope',
  function($scope, $http, bookSelect) {

    //gets data for books
    $http.get('books/books.json').success(function(data) {
      //create a books variable for returned object to be used in the view 
      return $scope.books = data;
    });

    //sets the filterBy to all as default and on 'all' selection
    $scope.orderProp = '';

    //currentObj is called in book-list.html when a user clicks to link to the detail page
    $scope.currentObj = function(book){
      //sets the currentBookObj to the object clicked 
      bookSelect.setProperty(book);
    }

  }]);


reedsyBooksControllers.controller('BookDetailCtrl', ['$scope', 'bookSelect', '$routeParams', '$http',
  function($scope, $routeParams, $http, bookSelect) {
    //set book variable to the current book 
    $scope.book = $routeParams.currentBookObj;

    
    
    //creates contents obj to be used in bookdetail for ngrepeat on contents
    $scope.contents = {};
    for (var key in $scope.book.introduction) {
      $scope.contents[key] = $scope.book.introduction[key].content;
    };    

  }]);









