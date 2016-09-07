var OBPControllerApp = angular.module("OBPController",["ngRoute","ngMaterial"]);

OBPControllerApp.controller('AppCtrl', function($scope, $mdDialog) {
      $scope.imagePath = 'img/NewsLetter.png';
      $scope.imagePathDog = 'img/dog.png';
      $scope.image1 = 'img/Image1.png';
      $scope.image2 = 'img/Image2.png';
      $scope.image3 = 'img/Image3.png';
      $scope.image4 = 'img/Image4.png';
      $scope.image5 = 'img/Image5.png';
      $scope.image6 = 'img/Image6.png';
      $scope.image7 = 'img/Image7.png';
      $scope.image8 = 'img/Image8.png';
      $scope.image9 = 'img/Image9.png';

      $scope.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'dialog1.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:false,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
      };

      function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
          $mdDialog.hide(answer);
        };
      }

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
    templateUrl : 'archives_new.html',
    controller : 'ArchivesController'
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

OBPControllerApp
  .controller('ArchivesController', function DemoCtrl($scope) {
    $scope.searchOptions = {
    model: null,
    searchOptionsList: [
     {id: '1', name: 'NewsLetter'},
     {id: '2', name: 'Author'},
     {id: '3', name: 'Media'}
    ]};

    $scope.byNewsLetterOptions ={
      model: null,
      byNewsLetterOptionsList: [
      {id: '1', name: 'Month'},
      {id: '2', name: 'Year'},
      {id: '3', name: 'Edition'}
   ]};

 $scope.byAuthorOptions = {
    model: null,
    byAuthorOptionsList: [
     {id: '1', name: 'Name'},
     {id: '2', name: 'Date'},
     {id: '3', name: 'Tags'},
     {id: '4', name: 'Titles'}
   ]};
  });
