var mongoose = require('mongoose');

const tnailSchema = new mongoose.Schema({
  'tnail': {
    type: String,
    required: false
  },
  'feeling': {
    type: String,
    required: false
  }
});

const boardSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'samples': {
    type: [tnailSchema],
    required: false
  },
  'colorpallette': {
    type: [String],
    required: false
  }
});

module.exports = mongoose.model('boards', boardSchema);
