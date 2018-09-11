var mongoose = require('mongoose');

const blogs = mongoose.model('blogs');
const gallerypics = mongoose.model('gallerypics');

exports.getGallery = (req, res) => {
  gallerypics.find({show: "y"}).sort({order: 1}).exec()
  .then(images => {
    var pics = images.length - 1;
    var images1 = [];
    var images2 = [];
    for (var x = 0; x <= pics; x++) {
      if (x <= (pics/2)) {
        images1.push(images[x]);
      }
      else {
        images2.push(images[x]);
      }
    }
    //console.log(images1);
    //console.log(images2);
    res.render('gallery', { title: 'march/76 - Gallery', images1, images2 });
  })
  .catch(err => {
    next(err);
  });
}

exports.getAbout = (req, res) => {
  res.render('about', { title: 'march/76 - About Me'});
}

exports.getContact = (req, res) => {
  res.render('contact', { title: 'march/76 - Contact'});
}

exports.getBlog = (req, res) => {
  blogs.find({show: "y"}).sort({order: -1}).exec()
  .then(posts => {
    res.render('blog', { title: 'march/76 - Blog', posts});
  })
  .catch(err => {
    next(err);
  });
}

exports.getBlogPost = (req, res) => {
  blogs.find({quick: req.params.quick}).exec()
  .then(blogpost => {
    console.log(blogpost);
    res.render('blogpost', { title: 'march/76 - ' + blogpost[0].headline , blogpost });
  })
  .catch(err => {
    next(err);
  });
}
