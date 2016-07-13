var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  $scope.names = ['CS','CE','ME','EE'];
  $scope.years = ['1','2','3','4'];
});
