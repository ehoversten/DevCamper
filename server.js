const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to our Database
connectDB();

// Route Controller
const bootcamps = require('./routes/bootcamp');


// Create our Express Instance
const app = express();  
const PORT = process.env.PORT || 5000;

// *** MIDDLEWARE *** //

// Morgan MIDDLEWARE
app.use(morgan('dev'));

// Mount Routers
app.use('/api/v1/devcamper', bootcamps);


// *** ERROR MIDDLEWARE *** //
app.use((req, res, next) => {
    const error = new Error("Route Not Found!");
    error.status = 404;
    // We call the next middleware function and pass it the error;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({ 
        success: false, 
        msg: error.message 
    })
});


// *** CONNECT SERVER *** //

app.listen(PORT, function() {
    console.log(`Server is in ${process.env.NODE_ENV} mode on PORT: ${PORT}`);
}) 