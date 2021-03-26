const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.post("/menus/:id/reviews", reviewsCtrl.create);

module.exports = router;
