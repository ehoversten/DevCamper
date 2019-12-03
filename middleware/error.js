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

    res.status(error.statusCode || 500).json({
        success: true,
        error: error.messagen || 'Server Error!'
    });
}

module.exports = errorHandler;