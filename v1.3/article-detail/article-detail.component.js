'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('articleDetail').
  component('articleDetail', {
    templateUrl: 'article-detail/article-detail.template.html',
    controller: ['$routeParams', 'Article',
      function PhoneDetailController($routeParams, Article) {
        var self = this;
        self.article = Article.get({articleId: $routeParams.articleId}, function(phone) {
          self.setImage(article.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
