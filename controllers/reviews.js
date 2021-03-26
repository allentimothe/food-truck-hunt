const Menu = require("../models/menu");

function create(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    menu.reviews.push(req.body);
    menu.save(function (err) {
      res.redirect(`/menus/${menu._id}`);
    });
  });
}

module.exports = {
  create,
};
