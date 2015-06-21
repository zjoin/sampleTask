
(function () {
  'use strict';
var myApp =   angular.module('myApp', ['ngTagsInput'])
        .controller('MyCtrl', function($scope, $http) {
          $scope.tags = [
            { text: 'Гипермаркет' },
            { text: 'Магазин' }
            
          ];
          $scope.loadTags = function(query) {
            return $http.get('/tags?query=' + query);
          };
        });
    
myApp.controller('mainController', function($scope) {
  $scope.goCats = false;
});
    
})();
