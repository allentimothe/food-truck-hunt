const express = require('express');
const router = express.Router();
// shortened version to call express router below
//const router = require('express').Router();
const locationsCtrl = require('../controllers/locations');



router.get('/locations/new', locationsCtrl.new);
router.post('/locations', locationsCtrl.create);
router.post('/menus/:id/locations', locationsCtrl.addToStore);


module.exports = router;