const Menu = require('../models/menu');
function index(req, res) {
    res.render("menus/index", {
      menus: Menu.getAll(),
    });
  }
  
  function show(req, res) {
    res.render("menus/show", {
      menu: Menu.getOne(req.params.id),
      menuNum: parseInt(req.params.id) + 1,
    });
  }
  
  module.exports = {
    index,
    show,
    new: newMenu,
    create,
    delete: deleteMenu,
    edit, 
    update,
  };

  function newMenu(req, res) {
    res.render('menus/new');
   }

   function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Menu.create(req.body);
    res.redirect('/menus');
  }

  function deleteMenu(req, res) {
    Menu.deleteOne(req.params.id);
    req.body.done = false;
    res.redirect('/menus');
   }

  function edit(req, res) {
    const menu = Menu.getOne(req.params.id);
    res.render('menus/edit', { 
      menu,
      menuId: req.params.id,
     });
   }

   function update(req,res) {
     //done property
     req.body.done = req.body.done ? true : false; 

     Menu.updateOne(req.params.id, req.body);
     //respond with res.redirect
     res.redirect(`/menus/${req.params.id}`)
   }
  