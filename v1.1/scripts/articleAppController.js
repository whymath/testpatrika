var articleApp = angular.module("articleApp",[]);

articleApp.controller('articleAppController',function(){
  this.articles = article;
});

var article = {
  articleId: '20',
	title: 'Creation of the Article Page',
	author: 'Sourajyoti Bose',
	date: '19-Apr-2016',
  heading: 'Welcome to Article Heading',
	description: 'The article I wrote was over here. But mucho gracias. Lorem Ipsum My Ass.'
};
