var mongoose = require('mongoose');

const blogs = mongoose.model('blogs');
const gallery = mongoose.model('gallery');

exports.getGallery = (req, res) => {
  res.render('gallery', { title: 'march/76 / gallery'});
}

exports.getAbout = (req, res) => {
  res.render('about', { title: 'march/76 / about me'});
}

exports.getContact = (req, res) => {
  res.render('contact', { title: 'march/76 / contact'});
}

exports.getBlog = (req, res) => {
  blogs.find({show: "y"}).sort({order: -1}).exec()
  .then(posts => {
    res.render('blog', { title: 'march/76 / blog', posts});
  })
  .catch(err => {
    next(err);
  });
}
