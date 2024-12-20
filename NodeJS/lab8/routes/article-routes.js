const express = require('express');
const authorisateUser = require('../middleware/authorisate-user.js');

const {
    getArticles,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle,
} = require('../controllers/article-controller');

const router = express.Router();

router.get('/articles', getArticles);
router.get('/article/:id', authorisateUser, getArticleById);
router.post('/articles', authorisateUser, addArticle);
router.patch('/articles/updatearticle/:id', updateArticle);
router.delete('/articles/deletearticle/:id', deleteArticle);

module.exports = router;