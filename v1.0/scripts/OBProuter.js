var app=angular.module("NewsletterRoute",['ngRoute']);
app.config(function($routeProviderm, $locationProvider)){
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("#/",{
      templateUrl: "menu/home.html"
    })
    .when("/Home",{
      templateUrl: "menu/home.html"
    })
    .when("/Archives",{
      templateUrl: "menu/archives.html"
    })
    .when("/Team",{
      templateUrl: "menu/team.html"
    })
    .when("/Contact",{
      templateUrl: "menu/contact.html"
    })
    .otherwise({
      templateUrl: "menu/home.html"
    });
});
