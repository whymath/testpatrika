'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/archives',{
          template :'<archive-pages></archive-pages>'
        }).
        when('/contactus',{
          template: '<contact-us></contact-us>'
        }).
        otherwise('/phones');
    }
  ]);
