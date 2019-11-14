const Bootcamp = require('../models/Bootcamp');

// @description        Get all bootcamps
// @route              GET /api/v1/bootcamps
// @access             Public
exports.getAllBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find({ });
        res.status(200).json({ 
            success: true,
            data: bootcamps,
            msg: "Retrieved All Bootcamps"
        })
    } catch(err){
        console.log(err);
        res.status(400).json({ success: false });
    }

}



// @description        Get single bootcamps
// @route              GET /api/v1/bootcamps/:id
// @access             Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById({
            _id: req.params.id
        });
    
        res.status(200).json({ 
            success: true, 
            data: bootcamp,
            msg: `Retrieved Bootcamp: ${bootcamp.id}`
        })
    } catch(err) {
        console.log(err);
        res.status(400).json({
            success: false,
            msg: `Could not find Bootcamp: ${req.params.id}`
        })
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
        console.log(err);
        res.status(400).json({ success: false });
    }
}


// @description        Update single bootcamp
// @route              PUT /api/v1/bootcamps/:id
// @access             Private
exports.updateBootcamp = async (req, res, next) => {
    console.log(req.body);
    console.log(req.params.id);
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
          success: true,
          msg: `Updated bootcamp with id of ${req.params.id}`,
          data: bootcamp,
        });
    } catch(err) {
        console.log(err);
        res.status(400).json({ success: false });
    }

    // res.status(200).json({ success: true, msg: `Updated bootcamp with id of ${req.params.id}` });
}


// @description        Remove a bootcamp
// @route              DELETE /api/v1/bootcamps/:id
// @access             Private
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        res.status(200).json({ 
            success: true, 
            msg: `Bootcamp with id of ${req.params.id} deleted` 
        });
    } catch(err) {
        console.log(err);
        res.status(400).json({ success: false });
    }
    
    // res.status(200).json({ success: true, msg: `Bootcamp with id of ${req.params.id} deleted` });

}
