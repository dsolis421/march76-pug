var mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'date': {
    type: String,
    required: false
  },
  'order': {
    type: Number,
    required: true
  },
  'camera': {
    type: String,
    required: false
  },
  'lense': {
    type: String,
    required: false
  },
  'focallength': {
    type: String,
    required: false
  },
  'fstop': {
    type: String,
    required: false
  },
  'iso': {
    type: String,
    required: false
  },
  'shutterspeed': {
    type: String,
    required: false
  },
  'lowres': {
    type: String,
    required: true
  },
  'highres': {
    type: String,
    required: true
  },
  'category': {
    type: String,
    required: false
  },
  'show': {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('portfolio', portfolioSchema);
