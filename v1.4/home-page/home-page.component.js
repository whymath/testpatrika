'use strict';

angular.
  module('homePage').
  component('homePage',{
    templateUrl: 'home-page/home-page.template.html',
    controller: [
      function HomePageController(){
        this.homeElements = [
          {name: 'Home', link:'phones', index:'1'},
          {name: 'Archives', link:'archives', index:'2'},
          {name: 'Contact Us', link:'contactus', index:'4'},
        ];
      }
    ]
  });
