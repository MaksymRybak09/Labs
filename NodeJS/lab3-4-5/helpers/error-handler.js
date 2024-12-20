class ErrorHandler {
    static handleError(res, err) {
        res.status(500).json({ err });
    }
}

module.exports = ErrorHandler;