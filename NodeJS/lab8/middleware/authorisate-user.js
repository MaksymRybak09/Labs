const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../helpers/error-handler');
require('dotenv').config();

const authorisateUser = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (token === 'null') {
            ErrorHandler.handleError(res, 403, 'Forbidden access');
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, "tokens.token": token});
        if (!user) {
            throw new Error('Please authentificate');
        }
        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        ErrorHandler.handleError(res, err.message);
    }
}

module.exports = authorisateUser;