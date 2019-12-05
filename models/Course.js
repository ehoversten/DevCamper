const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a Course Title"],
  },
  description: {
    type: String,
    required: [true, "Please add a Course Description"],
  },
  weeks: {
    type: String,
    required: [true, "Please add a total course duration(in weeks)"],
  },
  tuition: {
    type: String,
    required: [true, "Please add a total course tuition"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add minimum skill level"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
      type: Date,
      default: Date.now
  },
  bootcamp: {
      type: mongoose.Schema.ObjectId,
      ref: 'Bootcamp',
      required: true
  }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;