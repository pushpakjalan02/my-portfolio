const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['resume', 'github', 'linkedin', 'twitter', 'other'],
    default: 'other'
  }
}, { timestamps: true });

module.exports = mongoose.model('Link', linkSchema);