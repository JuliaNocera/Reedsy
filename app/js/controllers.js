'use strict';

/* Controllers */
var reedsyBooksControllers = angular.module('bookControllers', ['ngResource']);


reedsyBooksControllers.controller('BookListCtrl', ['$scope', '$http', 'bookSelect', 'Book', '$routeParams', '$rootScope',
  function($scope, $http, bookSelect, Book, $routeParams, $rootScope) {

    //calls query to make http request to JSON file
    $scope.books = Book.query();

    //sets the filterBy to all as default and on 'all' selection
    $scope.orderProp = '';

    //currentObj is called in book-list.html when a user clicks to link to the detail page
    $scope.currentObj = function(book){
      //sets the currentBookObj to the object clicked 
      bookSelect.setProperty(book);
    }

    //sets suggested books limit to 3 
    $scope.limit = 3;

  }]);


reedsyBooksControllers.controller('BookDetailCtrl', ['$scope', 'bookSelect', '$location', '$routeParams', '$http',
  function($scope, $routeParams, $http, bookSelect, Book, $location) {

    //sets book variable to the current book 
    $scope.book = $routeParams.currentBookObj;      
        
    //creates contents obj to be used in bookdetail for ngrepeat on contents
    $scope.contents = {};
    for (var key in $scope.book.introduction) {
      $scope.contents[key] = $scope.book.introduction[key].content;
    };    

  }]);

//redirects to landing page on refresh from detail view
reedsyBooksControllers.controller('topController', ['$location', function($location){
  $location.path("/")
}]);





