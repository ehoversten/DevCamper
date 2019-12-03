const ErrorResponse = require('../utils/errorResponses');

// define our error handler function
const errorHandler = function(err, req, res, next) {
    let error = { ...err };

    error.message = err.message;
    // Log to console for dev mode
    console.log(err.stack.red);

    // Mongoose Bad ObjectID
    if(err.name === 'CastError') {
        const message = `Resource with id of ${err.value} not found`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose Duplicate Key Error
    if(err.code === 11000) {
        const message = 'Duplcate Field Value Entered';
        error = new ErrorResponse(message, 400);
    }

    // Mongoose Validation Errors
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: true,
        error: error.message || 'Server Error!'
    });
}

module.exports = errorHandler;