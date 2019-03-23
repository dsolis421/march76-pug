var express = require('express');
var router = express.Router();
const marController = require('../controllers/marController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'march76' });
});

router.get('/gallery/:cat', marController.getGallery);

router.get('/gallery', marController.getGalleryPets, marController.getGalleryPortraits, marController.getGalleryCreative)

router.get('/about', marController.getAbout);

router.get('/contact', marController.getContact);

router.get('/blog', marController.getBlog);

router.get('/blog/:quick', marController.getBlogPost);

router.get('/boards/:name', marController.getMoodboard);

module.exports = router;
