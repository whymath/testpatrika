'use strict';

angular.
  module('core.articles').
  factory('Articles', ['$http',

    function($http) {
      return {
        articlesGetAll : articlesGetAll,
        articleGetOne : articleGetOne,
        getArchives : getArchives,
        usersGetAll : usersGetAll
      };

      function articlesGetAll() {
        return $http.get('/api/articles').then(complete).catch(failed);
      }

      function articleGetOne(id) {
        return $http.get('/api/articles/'+id).then(complete).catch(failed);
      }
      
      function getArchives(edition, user) {
				return $http.get('/api/'+edition+'/articles/'+user).then(complete).catch(failed);      	
      }
      
      function usersGetAll() {
      	return $http.get('/api/users').then(complete).catch(failed);
      }

      function complete(response) {
        return response;
      }

      function failed(error) {
        console.log(error.statusText);
      }
    }
]);
