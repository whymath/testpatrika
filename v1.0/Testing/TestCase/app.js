var App = angular.module('App', ['ngRoute']);

App.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view1.html',
      controller: 'View1Controller'
    })
    .when('/partial2', {
      templateUrl: 'view2.html',
      controller: 'View2Controller'
    })
    .otherwise({
      redirectTo: '/404'
    });
});

App.controller('View1Controller', function($scope) {
  $scope.customers = [{
    name: 'a',
    city: 'a'
  }, {
    name: 'b',
    city: 'b'
  }, {
    name: 'c',
    city: 'c'
  }, {
    name: 'd',
    city: 'd'
  }];
  $scope.addCustomer = function() {
    $scope.customers.push({
      name: $scope.newCustomer.name,
      city: $scope.newCustomer.city
    });
  }
});

App.controller('View2Controller', function($scope) {
  $scope.hello = "BOOOO!";
});
