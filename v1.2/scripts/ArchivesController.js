angular.module('Archives', [])
 .controller('archivesController', ['$scope', function($scope) {
   $scope.searchOptions = {
    model: null,
    searchOptionsList: [
      {id: '1', name: 'NewsLetter'},
      {id: '2', name: 'Author'},
      {id: '3', name: 'Media'}
    ]};
  $scope.byNewsLetterOptions ={
    model: null,
    byNewsLetterOptionsList: [
       {id: '1', name: 'Month'},
       {id: '2', name: 'Year'}
    ]};
  $scope.byAuthorOptions = {
     model: null,
     byAuthorOptionsList: [
      {id: '1', name: 'Author'},
      {id: '2', name: 'Date'},
      {id: '3', name: 'Tags'},
      {id: '4', name: 'Titles'}
    ]};
}]);
