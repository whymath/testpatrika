var OBPControllerApp = angular.module("OBPController",["ngRoute","ngMaterial"]);

OBPControllerApp.controller('AppCtrl', function($scope) {
      $scope.imagePath = 'img/chipmunk.png';
    })
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });

OBPControllerApp.controller('listController',function(){
  this.menus = menuItems;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
  });

OBPControllerApp.config(function($routeProvider) {
  $routeProvider
  .when("/",{
    templateUrl : "home.html",
  })
  .when("/Home",{
    templateUrl : "home.html",
  })
  .when("/Archives",{
    templateUrl : "archives.html",
  })
  .when("/Team",{
    templateUrl : "team.html",
  })
  .otherwise
})

var menuItems= [
  {name: 'Home', index:'1'},
  {name: 'Archives', index:'2'},
  {name: 'Team', index:'3'},
  {name: 'Contact Us', index:'4'},
  {name: 'Sign In', index:'5'}
];
