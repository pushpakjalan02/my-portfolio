const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date, // null for current positions
  description: {
    type: String,
    required: true
  },
  achievements: [{
    type: String,
    required: true
  }],
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('WorkExperience', workExperienceSchema);