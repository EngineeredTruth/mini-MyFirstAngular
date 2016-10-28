angular.module('avengersApp')
    .controller('MainCtrl', function($scope, dataService){

$scope.getHeroes = function () {
  $scope.teamAvengers = dataService.getAvengers();
  console.log($scope.teamAvengers);
};

    }); //end mainCtrl
