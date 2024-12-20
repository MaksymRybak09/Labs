const Article = require('../models/article-model');
const User = require('../models/user-model');
const ErrorHandler = require('../helpers/error-handler');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const getMe = async (req, res) => {
    try {
        const me = await User.findById(req.user.id);
        await me.populate({path: 'articles', model: 'articles',});
        res.status(200).json(me);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const loginUser = async (req, res) => {
    try {
        const user = await User.findOneByEmail(req.body.email, req.body.password);
        const token = await user.generateToken();
        res.status(200).json({user, token});
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token != req.token);
        await req.user.save();
        res.status(200).send('User loged out');
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};


const updateUser = async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
};

module.exports = {
    getUsers,
    getMe,
    getUserById,
    addUser,
    loginUser,
    logoutUser,
    updateUser,
    deleteUser,
};