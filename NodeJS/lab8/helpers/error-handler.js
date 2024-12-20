class ErrorHandler {
    static handleError(res, statusCode, err) {
        res.status(statusCode).json({ err });
    }
}

module.exports = ErrorHandler;