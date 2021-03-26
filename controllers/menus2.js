const Menu2 = require("../models/menu2");
const Location = require('../models/location');

module.exports = {
  index,
  show,
  new: newMenu2,
  create,
};

function index(req, res) {
  Menu2.find({}, function (err, menus2) {
    res.render("/", { title: "Menu2", menus2 });
  });
}

function show(req, res) {
  Menu2.findById(req.params.id).populate('store').exec(function (err, menu2) {
    Location.find({_id: {$nin: menu2.store }}, function(err, locations) {
      res.render("menus/show", { title: "Menu2 Detail", menu2, locations });
    });
  });
}

function newMenu2(req, res) {
  res.render("menus/new", { title: "Add Menu2" });
}

function create(req, res) {
  // remove empty/blank inputs from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  // convert nowOpen's checkbox of nothing or "on" to boolean
  req.body.nowOpen = !!req.body.nowOpen;


  Menu2.create(req.body, function (err, menu2) {
    // one way to handle errors
    if (err) return res.redirect("/menus/new");
    // for now, redirect right back to the "new" view
    res.redirect(`/menus/${menu2._id}`);


  });
}
