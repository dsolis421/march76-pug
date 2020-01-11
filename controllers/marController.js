var mongoose = require('mongoose');

const blogs = mongoose.model('blogs');
const gallerypics = mongoose.model('gallerypics');
const moodboard = mongoose.model('boards');
const gallerycollection = mongoose.model('m76galleries');

/*var pets = [];
var portraits = [];
var creative = [];*/

//gets overall, shortened view of the gallery
/*exports.getGallery = (req, res) => {
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
}*/

exports.getGalleries = (req, res) => {
  gallerycollection.find({show: "y"}, { name: 1, frontpageimage: 1, quick: 1}).sort({order: 1}).exec()
  .then(galleries => {
    var pics = galleries.length - 1;
    var collections1 = [];
    var collections2 = [];
    for (var x = 0; x <= pics; x++) {
      if (x <= (pics/2)) {
        collections1.push(galleries[x]);
      }
      else {
        collections2.push(galleries[x]);
      }
    }
    res.render('newgallerylanding', { title: 'march76 - Gallery', collections1, collections2 });
  })
  .catch(err => {
    next(err);
  });
}

exports.getCollectionImages = (req, res, next) => {
  gallerycollection.find({quick: req.params.collection}).exec()
  .then(collectionimages => {
    var pics = collectionimages[0].images.length - 1;
    var images1 = [];
    var images2 = [];
    var collectionheader = {};
    for (var x = 0; x <= pics; x++) {
      if (x <= (pics/2)) {
        images1.push(collectionimages[0].images[x]);
      }
      else {
        images2.push(collectionimages[0].images[x]);
      }
    };
    collectionheader.name = collectionimages[0].name;
    collectionheader.desc = collectionimages[0].description;
    collectionheader.team = collectionimages[0].creativeteam;
    res.render('gallerycollection', { title: 'march76 - ' + collectionimages[0].name, collectionheader, images1, images2 });
  })
  .catch(err => {
    next(err);
  });
}

//gets a specific gallery for pets
/*exports.getGalleryPets = (req, res, next) => {
  gallerypics.find({show: "y", category: "Pets", frontpage: "y"}).exec()
  .then(returnedPets => {
    pets = returnedPets;
    next();
  })
  .catch(err => {
    next(err);
  });
}*/

//gets a specific gallery for portraits
/*exports.getGalleryPortraits = (req, res, next) => {
  gallerypics.find({show: "y", category: "Portraits", frontpage: "y"}).exec()
  .then(returnedPortraits => {
    portraits = returnedPortraits;
    next();
  })
  .catch(err => {
    next(err);
  });
}*/

//gets a specific gallery for creative images
/*exports.getGalleryCreative = (req, res, next) => {
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
}*/

//gets a listing of mood boards for display
exports.getBoardsList = (req, res, next) => {
  moodboard.find().sort({status: -1}).exec()
  .then(list => {
    /*console.log(list);*/
    res.render('boardlist', {title: 'march78 - Mood Board List', list});
  })
  .catch(err => {
    next(err);
  });
}

//gets an individual mood board for display
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
    project.name = board[0].name;
    project.quick = board[0].quick;
    project.palette = board[0].colorpalette;
    project.descShort = board[0].desc.substring(0,100) + "...";
    project.descFull = board[0].desc;
    project.status = board[0].status;
    project.schedule = board[0].schedule;
    project.team = board[0].team;
    project.location = board[0].location;
    project.result = board[0].resultimage;
    project.notes = board[0].notes;
    project.image = board[0].promoImage ? board[0].promoImage : "https://march76.com/images/m76-pageimage-wht.png";
    project.comments = board[0].comments ? board[0].comments : [];
    res.render('board', {title: `march76 - Mood Board - ` + board[0].name, project, collage1, collage2});
  })
  .catch(err => {
    next(err);
  });
}

//gets bio page
exports.getAbout = (req, res) => {
  res.render('about', { title: 'march76 - About Me'});
}

//gets contact info page
exports.getContact = (req, res) => {
  res.render('contact', { title: 'march76 - Contact'});
}

//gets listing of blog posts
exports.getBlog = (req, res) => {
  blogs.find({show: "y"}).sort({order: -1}).exec()
  .then(posts => {
    res.render('blog', { title: 'march76 - Blog', posts});
  })
  .catch(err => {
    next(err);
  });
}

//gets individual blog post
exports.getBlogPost = (req, res) => {
  blogs.find({quick: req.params.quick}).exec()
  .then(blogpost => {
    res.render('blogpost', { title: 'march76 - ' + blogpost[0].headline , blogpost });
  })
  .catch(err => {
    next(err);
  });
}

//adds a comment to the moodboard
exports.addMoodComment = (req, res, next) => {
  console.log('add comment at the controller - addMoodComment');
  var date = new Date();
  moodboard.find({quick: req.params.quick}).exec()
  .then(board => {
    console.log('adding comment to the db', board[0].comments);
    board[0].comments.unshift({commentname: req.body.name, commenttext: req.body.commenttext, date: date});
    return board[0].save();
  })
  .then(() => {
    return res.status(201).send({error: false});
  })
  .catch(err => {
    next(err);
  });
}
