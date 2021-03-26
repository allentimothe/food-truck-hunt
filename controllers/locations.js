const Location = require('../models/location');
const Menu2 = require('../models/menu2');
// controllers perform actions on models
// - based on request from our client through the router

function newLocation(req, res) {
    Location.find({}, function(err, locations) {
        res.render('locations/new', {
            title: 'Add Location',
            locations
        });
});
}

function create(req, res) {
    Location.create(req.body, function(err) {
        res.redirect('/user/dashboard');
    });
}

function addToStore(req, res) {
    // find the menu2 by it's id -> req.params.id
    Menu2.findById(req.params.id, function(err, menu2) {
        // push the performerId from req.body into the cast array of the found menu
        menu2.store.push(req.body.locationId);
        // save the menu2 document
        menu2.save(function(err) {
            // res.redirect to the menu2 show page
            res.redirect(`/menus/${menu2._id}`);
        });
    });
}




module.exports = {
    new: newLocation,
    create,
    addToStore,
};