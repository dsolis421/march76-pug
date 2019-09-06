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

const teamSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: false
  },
  'role': {
    type: String,
    required: false
  }
});

const boardSchema = new mongoose.Schema({
  'name': {
    type: String,
    required: true
  },
  'quick': {
    type: String,
    required: true
  },
  'desc': {
    type: String,
    required: false
  },
  'samples': {
    type: [tnailSchema],
    required: false
  },
  'colorpalette': {
    type: [String],
    required: false
  },
  'status': {
    type: Number,
    required: false
  },
  'schedule': {
    type: String,
    required: false
  },
  'team': {
    type: [teamSchema],
    required: false
  },
  'location': {
    type: String,
    required: false
  },
  'resultimage': {
    type: String,
    required: false
  },
  'notes': {
    type: [String],
    required: false
  },
  'promoImage': {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('boards', boardSchema);
