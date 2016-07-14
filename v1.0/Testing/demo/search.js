
var app = angular.module("instantSearch", []);

app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

	
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){


	$scope.items = [
		{
			url: 'http://www.google.com',
			title: 'Google',
			
		},
		{
			url: 'http://www.yahoo.com',
			title: 'Yahoo ',
		
		},
		{
			url: 'http://www.tutorialspoint.com',
			title: 'Tutorials',
			
		},
		{
			
			title: 'Abc',
			
		},
		
	];


}
