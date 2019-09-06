var mongoose = require('mongoose');

const blogs = mongoose.model('blogs');
const gallerypics = mongoose.model('gallerypics');
const moodboard = mongoose.model('boards');

var pets = [];
var portraits = [];
var creative = [];

exports.getGallery = (req, res) => {
  gallerypics.find({show: "y", category: req.params.cat}).sort({order: 1}).exec()
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
    res.render('gallerycategory', { title: 'march76 - ' + req.params.cat, images1, images2 });
  })
  .catch(err => {
    next(err);
  });
}

exports.getGalleryPets = (req, res, next) => {
  gallerypics.find({show: "y", category: "Pets", frontpage: "y"}).exec()
  .then(returnedPets => {
    pets = returnedPets;
    next();
  })
  .catch(err => {
    next(err);
  });
}

exports.getGalleryPortraits = (req, res, next) => {
  gallerypics.find({show: "y", category: "Portraits", frontpage: "y"}).exec()
  .then(returnedPortraits => {
    portraits = returnedPortraits;
    next();
  })
  .catch(err => {
    next(err);
  });
}

exports.getGalleryCreative = (req, res, next) => {
  gallerypics.find({show: "y", category: "Creative", frontpage: "y"}).exec()
  .then(returnedCreative => {
    creative = returnedCreative;
    res.render('gallerylanding', {title: 'march78 - Gallery', pets, portraits, creative});
  })
  .then(() => {
    pets = [];
    portraits = [];
    creative = [];
  })
  .catch(err => {
    next(err);
  });
}

exports.getMoodboard = (req, res, next) => {
  moodboard.find({quick: req.params.quick}).exec()
  .then(board => {
    if(board == []){
      next();
    }
    var slength = board[0].samples.length - 1;
    var collage1 = [];
    var collage2 = [];
    var project = {};
    for (var x = 0; x <= slength; x++) {
      if(x <= (slength/2)){
        collage1.push(board[0].samples[x]);
      }
      else {
        collage2.push(board[0].samples[x]);
      }
    }
    /*var palette = board[0].colorpalette;
    var name = board[0].name;
    var desc = board[0].desc.substring(0,50) + "...";*/
    project.name = board[0].name
    project.palette = board[0].colorpalette;
    project.descShort = board[0].desc.substring(0,50) + "...";
    project.descFull = board[0].desc;
    project.status = board[0].status;
    project.schedule = board[0].schedule;
    project.team = board[0].team;
    project.location = board[0].location;
    project.result = board[0].resultimage;
    project.notes = board[0].notes;
    project.image = board[0].promoImage ? board[0].promoImage : "/images/m76-pageimage-wht.png";
    res.render('board', {title: `march76 - Mood Board - ` + board[0].name, project, collage1, collage2});
  })
  .catch(err => {
    next(err);
  });
}

exports.getAbout = (req, res) => {
  res.render('about', { title: 'march76 - About Me'});
}

exports.getContact = (req, res) => {
  res.render('contact', { title: 'march76 - Contact'});
}

exports.getBlog = (req, res) => {
  blogs.find({show: "y"}).sort({order: -1}).exec()
  .then(posts => {
    res.render('blog', { title: 'march76 - Blog', posts});
  })
  .catch(err => {
    next(err);
  });
}

exports.getBlogPost = (req, res) => {
  blogs.find({quick: req.params.quick}).exec()
  .then(blogpost => {
    res.render('blogpost', { title: 'march76 - ' + blogpost[0].headline , blogpost });
  })
  .catch(err => {
    next(err);
  });
}
