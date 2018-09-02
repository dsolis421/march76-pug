var mongoose = require('mongoose');

const blogs = mongoose.model('blogs');
const portfolio = mongoose.model('portfolio');

exports.getGallery = (req, res) => {
  portfolio.find({show: "y"}).exec()
  /*.then(images => {
    var set = images.length - 1;
    var images1 = [];
    var images2 = [];
    for (x = 0; x <= set; x++) {
      if (x <= set/2) {
        images1.push(images[x]);
      }
      else {
        images2.push(images[x]);
      }
    }
    res.render('gallery', { title: 'march/76 / gallery', images1, images2 });
  })*/
  .then(pics => {
    console.log(pics);
    res.render('gallery', { title: 'march/76 / gallery', pics });
  })
  .catch(err => {
    next(err);
  });
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
