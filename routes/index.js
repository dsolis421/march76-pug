var express = require('express');
var router = express.Router();
const marController = require('../controllers/marController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'march76 - Digital Artistry' });
});

module.exports = router;
