var mongoose = require('mongoose');

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
  res.render('blog', { title: 'march/76 / blog'});
}
