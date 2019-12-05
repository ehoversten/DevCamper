const express = require('express');

const { 
  getAllBootcamps, 
  getBootcamp, 
  updateBootcamp, 
  createBootcamp, 
  deleteBootcamp 
} = require('../controllers/bootcamps');

const courseRouter = require('./course');

const router = express.Router();

// Re-route into other resources
router.use('/:bootcampId/courses', courseRouter);

// *** MORE ADVANCED ROUTES *** //
router.route('/')
    .get(getAllBootcamps)
    .post(createBootcamp);


router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);



// *** STARTER ROUTES *** //
// GET ALL ROUTE
// router.get('/', function (req, res) {
//   getAllBootcamps();
// });


// // CREATE NEW RESOURCE ROUTE
// router.post('/', function (req, res) {
//   createBootcamp();
// });


// // GET SINGLE RESOURCE ROUTE
// router.get('/:id', function (req, res) {
//   getBootcamp();
// });


// // UPDATE RESOURCE ROUTE
// router.put('/:id', function (req, res) {
//   updateBootcamp();
// });


// // DELETE RESOURCE ROUTE
// router.delete('/:id', function (req, res) {
//   deleteBootcamp();
// });

module.exports = router;