const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Create our Express Instance
const app = express();

const PORT = process.env.PORT || 5000;


// *** STARTER ROUTES *** //
// GET ALL ROUTE
app.get('/api/v1/devcamper', function(req, res) {
    res
      .status(200)
      .json({ successs: true, msg: "show all bootcamps"});
    });
    
// GET SINGLE RESOURCE ROUTE
app.get('/api/v1/devcamper/:id', function(req, res) {
    res
        .status(200)
        .json({ successs: true, msg: `show bootcamp with id of ${req.params.id}`});
});

// CREATE NEW RESOURCE ROUTE
app.post('/api/v1/devcamper', function(req, res) {
    res
      .status(200)
      .json({ successs: true, msg: "new bootcamp was created"});
});

// UPDATE RESOURCE ROUTE
app.put('/api/v1/devcamper/:id', function(req, res) {
    res
      .status(200)
      .json({ successs: true, msg: `updated bootcamp with id of ${req.params.id}` });
});

// DELETE RESOURCE ROUTE
app.delete('/api/v1/devcamper/:id', function(req, res) {
    res
      .status(200)
      .json({ successs: true, msg:`deleted bootcamp with id of ${req.params.id}` });
});


app.listen(PORT, function() {
    console.log(`Server is in ${process.env.NODE_ENV} mode on PORT: ${PORT}`);
}) 