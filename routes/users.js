const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// routes for signing up!
router.get('/new', usersCtrl.new);
router.post('/signup', usersCtrl.signUp);

// routes for signing in!
router.get('/signin', usersCtrl.signIn);
router.post('/login', usersCtrl.login); 

// other
router.get('/logout', usersCtrl.logout);

//protected routes
router.get('/dashboard', usersCtrl.dashboard);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;