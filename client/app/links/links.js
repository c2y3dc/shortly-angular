angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function (){
    Links.getLinks()
    .then(function(result){
      $scope.data.links = result;
    })
    .catch(function(error){
      console.error(error);
    });
  };
  $scope.getLinks();
});
