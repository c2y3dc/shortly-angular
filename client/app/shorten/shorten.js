angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  console.log('in shorten');
  $scope.addLink = function() {
   // Links.addLink(JSON.stringify($scope.link.url))

    Links.addLink($scope.link.url)
    .then(function(res){
      console.log(res.code); //shortened
    });
  };

});
