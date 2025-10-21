const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['degree', 'certificate'],
    required: true
  },

  // For degree type
  degree: String,
  college: String,
  startYear: Number,
  endYear: Number,
  description: String,
  relevantCoursework: [String],
  
  // For certificate type
  certificateName: String,
  issuingOrganization: String,
  year: Number,
  
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);