var mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  'imagename': {
    type: String,
    required: true
  },
  'order': {
    type: Number,
    required: true
  },
  'camera': {
    type: String,
    required: false
  },
  'lens': {
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
  }
});

const collectionSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'quick': {
    type: String,
    required: true
  },
  'date': {
    type: String,
    required: false
  },
  'description': {
    type: String,
    required: false
  },
  'order': {
    type: Number,
    required: true
  },
  'show': {
    type: String,
    required: true
  },
  'frontpageimage': {
    type: String,
    required: true
  },
  'images': {
    type: [imageSchema],
    required: true
  }
});

module.exports = mongoose.model('m76galleries', collectionSchema)
