var OBPControllerApp = angular.module("OBPController",["ngRoute","ngMaterial","ngMessages"]);

OBPControllerApp.controller('AppCtrl', function($scope, $mdDialog, $http) {
      $http({method:'GET', url:'data/articles/Naman1.json'}).success(function(response){
          $scope.articles ={
            imagePath: response.image,
            heading: response.heading,
            title: response.atitle,
          }
      });
      $scope.imagePath = 'img/Newsletter.png';
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
        $http({method:'GET', url:'data/articles/Naman1.json'}).success(function(response){
            $scope.article ={
              imagePath: response.image,
              heading: response.heading,
              title: response.atitle,
              contents: response.contents,
              image1: response.image1
            }
        });

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
    templateUrl : 'archives.html',
    controller : 'ArchivesController'
  })
  .when("/Team",{
    templateUrl : "team.html",
  })
  .when("/Contact",{
    templateUrl : "contact.html",
  })
  .otherwise
})

var menuItems= [
  {name: 'Home', link:'Home', index:'1'},
  {name: 'Archives', link:'Archives', index:'2'},
  {name: 'Team', link:'Team', index:'3'},
  {name: 'Contact Us', link:'Contact', index:'4'},
  {name: 'Sign In', link:'SignIn', index:'5'}
];

OBPControllerApp.controller('ArchivesController', function DemoCtrl($scope,$http) {
    $http({method:'GET', url:'data/dropDowns/SearchOptionItems.json'}).success(function(response){
      $scope.searchOptions = {
        model: response.model,
        searchOptionsList: response.OptionsList
      };
    });

    $http({method:'GET', url:'data/dropDowns/NLSearchOptions.json'}).success(function(response){
      $scope.byNewsLetterOptions = {
        model: response.model,
        byNewsLetterOptionsList: response.OptionsList
      };
    });

    $http({method:'GET', url:'data/dropDowns/AuthorSearchOptions.json'}).success(function(response){
      $scope.byAuthorOptions = {
        model: response.model,
        byAuthorOptionsList: response.OptionsList
      };
    });
});


OBPControllerApp
  .controller('ContactCtrl', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: null,
      postalCode: '94043'
    };

    $scope.states = ('GA GX GO').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });
