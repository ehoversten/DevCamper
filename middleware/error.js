// define our error handler function
const errorHandler = function(err, req, res, next) {
    // Log to console for dev mode
    console.log(err.stack);

    res.status(500).json({
        success: true,
        error: err.message
    });
}

module.exports = errorHandler;