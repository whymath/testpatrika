var express = require('express');
var router = express.Router();

var ctrlArticles = require('../controllers/articles.controller.js');
var ctrlUsers = require('../controllers/users.controller.js');
router
  .route('/articles')
  .get(ctrlArticles.articlesGetAll);

router
  .route('/articles/:id')
  .get(ctrlArticles.articleGetOne);
  
router
	.route('/:edition/articles/:author')
	.get(ctrlArticles.getArchive);
	  
router
	.route('/users')
	.get(ctrlUsers.usersGetAll);

module.exports = router;
