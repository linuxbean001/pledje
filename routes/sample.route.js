var sampleCtrl = require('../controllers/sample.controller');
var express = require('express');
var router = express.Router();

router.route('/')
/** GET /api/sample - Get sample data */
    .get(sampleCtrl.get);

module.exports = router;