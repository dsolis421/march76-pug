var express = require('express');
var router = express.Router();
const marController = require('../controllers/marController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'march76 - Creative Photography by Danny Solis' });
});

/*router.get('/gallery/:collection', marController.getCollectionImages);*/

/*router.get('/portfolio', marController.getGalleries);*/

router.get('/portfolio', marController.getPortfolio);

router.get('/portfolio/:category', marController.getCategoryImages);

router.get('/about', marController.getAbout);

router.get('/contact', marController.getContact);

router.get('/blog', marController.getBlog);

router.get('/blog/:quick', marController.getBlogPost);

router.get('/boards/list', marController.getBoardsList);

router.get('/boards/:quick', marController.getMoodboard);

router.get('/contact/thankyou', (req, res, next) => res.render('contactthankyou', { title: 'march76 - Contact Thank You'}));

router.post('/boards/:quick', marController.addMoodComment);

router.post('/contact/submit', marController.newContactSubmit);

module.exports = router;
