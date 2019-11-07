const express = require('express');
const router = express.Router();

// *** STARTER ROUTES *** //
// GET ALL ROUTE
router.get('/', function (req, res) {
  res.status(200).json({ successs: true, msg: 'show all bootcamps' });
});


// CREATE NEW RESOURCE ROUTE
router.post('/', function (req, res) {
  res.status(200).json({ successs: true, msg: 'new bootcamp was created' });
});


// GET SINGLE RESOURCE ROUTE
router.get('/:id', function (req, res) {
  res
    .status(200)
    .json({ successs: true, msg: `show bootcamp with id of ${req.params.id}` });
});


// UPDATE RESOURCE ROUTE
router.put('/:id', function (req, res) {
  res
    .status(200)
    .json({
      successs: true,
      msg: `updated bootcamp with id of ${req.params.id}`
    });
});


// DELETE RESOURCE ROUTE
router.delete('/:id', function (req, res) {
  res
    .status(200)
    .json({
      successs: true,
      msg: `deleted bootcamp with id of ${req.params.id}`
    });
});

module.exports = router;