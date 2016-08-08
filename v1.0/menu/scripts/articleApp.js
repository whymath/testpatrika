var ArticleAppModule = angular.module("articleApp", []);

ArticleAppModule.controller('reviewController',function(){
	this.review = {};

	this.addReview = function(product){
		this.review.createdOn = Date.now();
		product.reviews.push(this.review);
		this.review = {};
	}
});

ArticleAppModule.controller('articleController',function(){
	this.articles = article;
});

ArticleAppModule.controller('PanelController',function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;
	};

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	};
});

var article = {
	articleId: '20',
	articleTitle: 'Creation of the Article Page',
	articleAuthor: 'Sourajyoti Bose',
	articleDate: '19-Apr-2016',
	description: 'The article I wrote was over here. But mucho gracias. Lorem Ipsum My Ass.',
	articleImages: [
		{
			image1: '/menu/img/chipmunk.jpg',
			image2: '/menu/img/chipmunk1.jpg'
		}
	]
}

var reviews = {

}
