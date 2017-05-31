'use strict';

function ArticleListController($route, $routeParams, Articles) {
  var vm = this;
  Articles.articleGetOne($routeParams.articleId).then(function(response){
    vm.article = response.data;
    vm.comments = response.data.comments;
    //vm.setImage(article.images[0]);
  });

  vm.setImage = function setImage(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };

  //Function to add comment to the article
  vm.addComment = function() {
    var postComment = {
      name : vm.name,
      bodyText : vm.bodyText,
      createdDate : Date.now()
    };
    articleGetOne.addComment($routeParams.articleId, postComment).then(function(response){
      if (response.status === 200) {
        $route.reload();
      }
    }).catch(function(error) {
      console.log(error);
    });
  };

  //Function to add like to the article
  /*vm.addLike = function() {
    var likes = vm.article.likes;
    likes++;
    console.log(likes);
    articleDataFactory.addLike($routeParams.articleId, likes).then(function(response) {
      if (response.status === 200) {
        $route.reload();
      }
    }).catch(function(error) {
      console.log(error);
    });
  };*/
}


// Register `articleDetail` component, along with its associated controller and template
angular.
  module('articleDetail').
  component('articleDetail', {
    templateUrl: 'article-detail/article-detail.template.html',
    controller: ArticleListController
  });
