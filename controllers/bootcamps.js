const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponses');

// @description        Get all bootcamps
// @route              GET /api/v1/bootcamps
// @access             Public
exports.getAllBootcamps = async (req, res, next) => {
    try {
        // Include Querys 
        let query;
        
        let queryStr = JSON.stringify(req.query);
        
        
        queryStr = queryStr.replace(/b(gt|gte|le|lte|in)\b/g, match => `$${match}`);
        
        // *** TESTING ***  //
        // console.log(req.query);
        // console.log(queryStr);
        query = Bootcamp.find(JSON.parse(queryStr));

        const bootcamps = await query;
        res.status(200).json({ 
            success: true,
            count: bootcamps.length,
            data: bootcamps,
            msg: "Retrieved All Bootcamps"
        })
    } catch(err){
        next(err);
    }
}

// @description        Get single bootcamps
// @route              GET /api/v1/bootcamps/:id
// @access             Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById({_id: req.params.id});

        // Bootcamp Not Found
        if (!bootcamp) {
            return next(new ErrorResponse(`Resource with id of ${req.params.id} not found`, 404));
        }

        // Bootcamp Found
        res.status(200).json({
            success: true,
            data: bootcamp,
            msg: `Retrieved Bootcamp: ${bootcamp.id}`,
        });
    } catch(err) {
        next(err);
    }
}



// @description        Create new bootcamp
// @route              POST /api/v1/bootcamps
// @access             Private
exports.createBootcamp = async (req, res, next) => {
    console.log(req.body);

    try {
        const bootcamp = await Bootcamp.create(req.body);
    
        res.status(201).json({ 
            success: true,
            data: bootcamp,
            msg: "Created new bootcamp"
        });
    } catch(err) {
        // console.log(err);
        // res.status(400).json({ success: false });
        next(err);
    }
}


// @description        Update single bootcamp
// @route              PUT /api/v1/bootcamps/:id
// @access             Private
exports.updateBootcamp = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
        );

        // Bootcamp Not Found
        if (!bootcamp) {
        return next(
            new ErrorResponse(`Resource with id of ${req.params.id} not found`, 404)
        );
        }

        res.status(200).json({
        success: true,
        msg: `Updated bootcamp with id of ${req.params.id}`,
        data: bootcamp,
        });
    } catch(err) {
        next(err);
    }

    // res.status(200).json({ success: true, msg: `Updated bootcamp with id of ${req.params.id}` });
}


// @description        Remove a bootcamp
// @route              DELETE /api/v1/bootcamps/:id
// @access             Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        // Bootcamp Not Found
        if (!bootcamp) {
            return next(
                new ErrorResponse(`Resource with id of ${req.params.id} not found`,404)
            );
        }

        res.status(200).json({
        success: true,
        msg: `Bootcamp with id of ${req.params.id} deleted`,
        });
    } catch(err) {
        next(err);
    }
    
    // res.status(200).json({ success: true, msg: `Bootcamp with id of ${req.params.id} deleted` });

}
