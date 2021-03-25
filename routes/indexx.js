var express = require('express');
var router = express.Router();
var indexxCtrl = require('../controllers/indexx');



/* GET home page. */
router.get('/', indexxCtrl.indexx);

module.exports = router;
