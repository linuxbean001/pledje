var express = require('express');
var router = express.Router();
var sampleRoutes =require('./sample.route');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/sample', sampleRoutes);

module.exports = router;