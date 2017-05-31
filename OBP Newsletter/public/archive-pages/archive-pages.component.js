'use strict';

angular.
  module('archivePages').
  component('archivePages', {
    templateUrl: 'archive-pages/archive-pages.template.html',
    controller: ['$routeParams', 'Articles',
      function archivePageController($routeParams, Articles) {
        var self = this;
        self.edition = null;
        self.author = null;

        Articles.usersGetAll().then(function(response) {
          console.log(response.data);
          self.users = response.data;
        });
        
        self.getArticles = function() {
        	console.log(self.edition);
        	console.log(self.author);
        	Articles.getArchives(self.edition, self.author).then(function(response) {
        		console.log(response.data);
						self.articles = response.data;       	
        	});
        }
      }
    ]
  });
