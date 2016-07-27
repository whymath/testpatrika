var app=angular.module("Newsletter",['ngRoute']);

app.controller('listSelect', function($scope){
  $scope.menu = [
    {
      'mindex':1,
      'name': 'Home',
    },
    {
      'mindex':2,
      'name': 'Archives',
    },
    {
      'mindex':3,
      'name': 'Team',
    },
    {
      'mindex':4,
      'name': 'Contact',
    }
  ];
  $scope.selected=0;
  $scope.select = function(index) {
    $scope.selected = index;
  };
});

app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '/menu/home.html'
  })
  .when('/Archives',{
    template: 'This is the archives route'
  })
  .when('/Team',{
    template: 'This is the team route.'
  })
  .when('/Contact',{
    template: 'This is the contact route'
  })
  .otherwise({redirectTo:'/'});
}]);


app.controller('ExtractDataFromArticle', function($scope, $http){
  $http.get('data/discipline.json').success(function(data){
    $scope.articles = data;
  })
  .error(function(data, status){
    console.error('failure loading the article record');;
  });
});
