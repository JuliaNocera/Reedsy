'use strict';

/* Controllers */
// var array = [];
var reedsyBooksControllers = angular.module('bookControllers', []);

// reedsyBooksControllers.value("bookSelect", {
//     currentBook: ''
//   });
reedsyBooksControllers.service('bookSelect', function(){
  // var currentBook = {};
    this.getProperty = function () {
      return currentBookObj;
    };
    this.setProperty = function(currValue) {
      currentBookObj = value;
    };
    
});


reedsyBooksControllers.controller('BookListCtrl', ['$scope','$http','bookSelect', '$rootScope',
  function($scope, $http) {
    return $http.get('books/books.json').success(function(data) {
      return $scope.books = data;
    });
    $scope.orderProp = '';

    console.log($scope.bookie);

    $scope.currentObj = function(book, bookSelect){
      $scope.bookie = book;
      console.log($scope.bookie);
      bookSelect.setProperty();
    }

  }]);


reedsyBooksControllers.controller('BookDetailCtrl', ['$scope', 'bookSelect', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    // $http.get('books/books.json').success(function(data) {
    //   $scope.book = data;
    // });
    $scope.book = $routeParams;


  }]);
