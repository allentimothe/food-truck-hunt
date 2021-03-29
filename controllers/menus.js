const Menu = require('../models/menu');
// const Location = require('../models/location');


function index(req, res) {
  Menu.find({}, function(err, menus) {
    res.render('menus/index', { menus })
  });
}
  

function show(req, res) {
  Menu.findById(req.params.id).populate('').exec(function (err, menu) {
//     Location.find({_id: {$nin: menu.shift }}, function(err, locations) {
//       res.render("menus/show", { title: "Menu Detail", menu, locations });
//     });
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
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    req.body.employeeName = req.body.employeeName;
    req.body.shift = req.body.shift;
    req.body.hours = req.body.hours;
  
      Menu.create(req.body, function(err, menu) {
          console.log(menu);
          if(err) return res.render('menus/new')
          res.redirect('/menus');
      });
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
