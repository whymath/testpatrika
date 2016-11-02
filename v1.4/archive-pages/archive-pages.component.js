'use strict';

angular.
  module('archivePages').
  component('archivePages',{
    templateUrl: 'archive-pages/archive-pages.template.html',
    controller: ['Phone',
      function ArchivePagesController(Phone){
        this.phones= Phone.query();
      }
    ]
  });
