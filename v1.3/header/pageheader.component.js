'use strict';

angular.
  module('newsletterApp').
  component('header',{
    templateUrl: 'header/pageheader.template.html',
    controller: function TitleController() {
      this.headerName = 'NewsLetter';
    }
  });
