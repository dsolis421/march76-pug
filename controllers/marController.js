var mongoose = require('mongoose');

const jetemailer = require('../services/jetemailer');
const blogs = mongoose.model('blogs');
const gallerypics = mongoose.model('gallerypics');
const moodboard = mongoose.model('boards');
const gallerycollection = mongoose.model('m76galleries');

//gets bio page
exports.getPortfolio = (req, res) => {
  res.render('portfoliolanding', {title: 'march76 - Portfolio'});
}

//gets series of pics for category basen on selection from portfolio page
exports.getCategoryImages = (req, res, next) => {
  gallerycollection.find({category: req.params.category}).exec()
  .then(images => {
    var categoryimages = images[0];
    /*console.log(categoryimages);*/
    res.render('portfoliocategory', { title: 'march76 - ' + categoryimages.name, categoryimages });
  })
  .catch(err => {
    next(err);
  });
}

//gets a listing of mood boards for display
exports.getBoardsList = (req, res, next) => {
  moodboard.find().sort({status: 1}).exec()
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
    //TODO: make this more efficient
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
  var date = new Date();
  moodboard.find({quick: req.params.quick}).exec()
  .then(board => {
    board[0].comments.unshift({commentname: req.body.name, commenttext: req.body.commenttext, date: date, quotetext: req.body.quote});
    board[0].save();
  })
  .then(() => {
    return res.status(201).send({error: false});
  })
  .catch(err => {
    next(err);
  });
}

//recieves new contact message and sends response email
exports.newContactSubmit = (req, res) => {
  var emailResponseData = req.body;
  console.log('calling jetemailer from controller');
  jetemailer.jetEmailResponse(emailResponseData)
  .then(() => {
    console.log('successful response from jetmailer');
    return res.status(201).send({error: false});
  })
  .catch(err => {
    console.log('emailer error from jetmailer: ',err);
    return res.status(500).send({error: true});
  });
}
