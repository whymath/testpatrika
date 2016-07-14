(function(angular) {
  'use strict';

  var myApp = angular.module('formExample',[]);

  myApp.controller('formController',function($scope){
    $scope.courses = [
      {course : "CS"},
      {course : "CE"},
      {course : "ME"}
    ];
  });
})(window.angular);
