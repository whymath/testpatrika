//creating an application module
var ArticleAppModule = angular.module("articleApp", []);

//The below code will read the data from student.json file and will pass to the $scope variable
ArticleAppModule.controller("ArticleCtrl", function($scope, $http){
			$http.get('data/article.json') //reading the student.json file

				.success (function(data){
						$scope.article = data; // binding the data to the $scope variable
					})
				.error(function(data, status) {
  						console.error('failure loading the article record', status, data);
  						$scope.students = { }; //return blank record if something goes wrong
				});

				//calculate the total marks of all the students
				 $scope.getTotalMarks = function(key) {
				        			var total = 0;
				        			angular.forEach($scope.students, function(record) {
				            		total += record[key];
				        		});
				        		return total;
    						};//end function getTotalMarks
	});//end controller
