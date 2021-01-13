var mongoose = require('mongoose');

//gets bio page
exports.getError = (req, res) => {
  res.render('error', {title: 'march76 - Error'});
}
