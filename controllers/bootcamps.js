// @description        Get all bootcamps
// @route              GET /api/v1/bootcamps
// @access             Public
exports.getAllBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });
}



// @description        Get single bootcamps
// @route              GET /api/v1/bootcamps/:id
// @access             Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp with id of ${req.params.id}` });
}



// @description        Create new bootcamp
// @route              POST /api/v1/bootcamps
// @access             Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Created new bootcamp" });
}


// @description        Update single bootcamp
// @route              PUT /api/v1/bootcamps/:id
// @access             Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Updated bootcamp with id of ${req.params.id}` });
}


// @description        Remove a bootcamp
// @route              DELETE /api/v1/bootcamps/:id
// @access             Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Bootcamp with id of ${req.params.id} deleted` });
}
