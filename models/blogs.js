var mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
  'subheader': {
    type: String,
    required: false
  },
  'text': {
    type: [String],
    required: true
  }
});

const blogSchema = new mongoose.Schema({
  'type': {
    type: String,
    required: true
  },
  'headline': {
    type: String,
    required: true
  },
  'quick': {
    type: String,
    required: false
  },
  'date': {
    type: String,
    required: true
  },
  'story': {
    type: [textSchema],
    required: true
  },
  'author': {
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
  'desc': {
    type: String,
    required: false
  },
  'image': {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('blogs', blogSchema);
