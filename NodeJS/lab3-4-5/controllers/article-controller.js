const User = require('../models/user-model');
const Article = require('../models/article-model');
const ErrorHandler = require('../helpers/error-handler');

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        await article.populate({path: 'author', model: 'users'});
        res.status(200).json(article);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const addArticle = async (req, res) => {
    try {
        const article = new Article({
            author: req.user.id,
            ...req.body,
        });
        const result = await article.save();
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const updateArticle = async (req, res) => {
    try {
        const result = await Article.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const deleteArticle = async (req, res) => {
    try {
        const result = await Article.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

module.exports = {
    getArticles,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle,
};