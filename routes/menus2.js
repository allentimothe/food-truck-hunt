const express = require('express');
const router = express.Router();
const menus2Ctrl = require('../controllers/menus2');

router.get('/', menus2Ctrl.index);
router.get('/new', menus2Ctrl.new);
router.get('/:id', menus2Ctrl.show);
router.post('/', menus2Ctrl.create);

module.exports = router;