var mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
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
  'ISO': {
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
  }
});

module.exports = mongoose.model('gallery', gallerySchema);
