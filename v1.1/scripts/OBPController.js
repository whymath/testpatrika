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
    templateUrl : 'home.html',
  })
  .when("/Home",{
    templateUrl : 'home.html',
  })
  .when("/Archives",{
    templateUrl : 'archives.html',
    controller : 'archivesController'
  })
  .when("/Team",{
    templateUrl : "team.html",
  })
  .when("/Contact",{
    templateUrl : "Contact.html",
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

var searchOptionsList = [
  {id: '1', name: 'NewsLetter'},
  {id: '2', name: 'Author'},
  {id: '3', name: 'Media'}
];

var byNewsLetterOptionsList= [
  {id: '1', name: 'Month'},
  {id: '2', name: 'Year'}
];

var byAuthorOptionsList= [
  {id: '1', name: 'Author'},
  {id: '2', name: 'Date'},
  {id: '3', name: 'Tags'},
  {id: '4', name: 'Titles'}
];
