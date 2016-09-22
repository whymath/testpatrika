'use strict';

angular.
  module('newsletterApp').
  component('articleList',{
    templateUrl:'article-list/article-list.template.html',
    controller: function ArticleListController() {
      this.articles = [
          {
            name: 'Yohan',
            snippet: 'Fast just got faster with Yohan.'
          }, {
            name: 'Sourajyoti',
            snippet: 'The Next, Next Generation Sourajyoti.'
          }, {
            name: 'Sherlock',
            snippet: 'The Next, Next Generation.'
          }
      ];
    }
  });
