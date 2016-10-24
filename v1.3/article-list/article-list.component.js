'use strict';

// Register `articleList` component, along with its associated controller and template
angular.
  module('articleList').
  component('articleList', {
    templateUrl: 'article-list/article-list.template.html',
    controller: ['Article',
      function PhoneListController(Article) {
        this.articles = Article.query();
        this.orderProp = 'age';
      }
    ]
  });
