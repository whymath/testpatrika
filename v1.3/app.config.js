'use strict';

angular.
  module('newsLetterApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/articles', {
          template: '<article-list></article-list>'
        }).
        when('/phones/:phoneId', {
          template: '<article-detail></article-detail>'
        }).
        otherwise('/articles');
    }
  ]);
