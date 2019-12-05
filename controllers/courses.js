const Course = require('../models/Course');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponses');

// @description        Get all courses
// @route              GET /api/v1/courses
// @route              GET /api/v1/bootcamps/:bootcampId/courses
// @access             Public
exports.getCourses = asyncHandler(async (req, res, next) => {

    let query;

    if(req.params.bootcampId) {
        query = Course.find( { bootcamp: req.params.bootcampId });
    } else {
        // query = Course.find();
        // query = Course.find().populate('bootcamp');
        query = Course.find().populate({
            path: 'bootcamp',
            select: 'name description'
        });
    }

    const courses = await query;
    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses,
    });

});