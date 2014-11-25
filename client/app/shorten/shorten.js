angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url) {
    Links.addLink()
    .then(function(res){
      console.log(res);
    })

  };

});
