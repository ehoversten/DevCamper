const express = require('express');
const dotenv = require('dotenv');

// Route Controller
const bootcamps = require('./routes/bootcamp');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Create our Express Instance
const app = express();  
const PORT = process.env.PORT || 5000;

// Mount Routers
app.use('/api/v1/devcamper', bootcamps);


app.listen(PORT, function() {
    console.log(`Server is in ${process.env.NODE_ENV} mode on PORT: ${PORT}`);
}) 