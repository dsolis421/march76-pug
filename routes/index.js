var express = require('express');
var router = express.Router();
const marController = require('../controllers/marController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'march76 - Creative Photography by Danny Solis' });
});

//router.get('/gallery/:cat', marController.getGallery);

router.get('/gallery/:collection', marController.getCollectionImages);

//router.get('/gallery', marController.getGalleryPets, marController.getGalleryPortraits, marController.getGalleryCreative)

router.get('/portfolio', marController.getGalleries);

router.get('/about', marController.getAbout);

router.get('/contact', marController.getContact);

router.get('/blog', marController.getBlog);

router.get('/blog/:quick', marController.getBlogPost);

router.get('/boards/list', marController.getBoardsList);

router.get('/boards/:quick', marController.getMoodboard);

router.post('/boards/:quick', marController.addMoodComment);

module.exports = router;
