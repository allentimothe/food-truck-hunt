const express = require('express');
const router = express.Router();
// require the Todo model
const menusCtrl = require('../controllers/menus');
// note that we'll need to define routes here later
router.get("/", menusCtrl.index);
router.get('/new', menusCtrl.new);
router.get("/:id", menusCtrl.show);
router.post('/', menusCtrl.create);
router.delete('/:id', menusCtrl.delete);
router.get('/:id/edit', menusCtrl.edit);
router.put('/:id', menusCtrl.update);

module.exports = router;