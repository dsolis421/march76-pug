var express = require('express');
var router = express.Router();
const marController = require('../controllers/marController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'march/76' });
});

router.get('/gallery', marController.getGallery);

router.get('/about', marController.getAbout);

router.get('/contact', marController.getContact);

router.get('/blog', marController.getBlog);

router.get('/blog/:quick', marController.getBlogPost);

module.exports = router;
