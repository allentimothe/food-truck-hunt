// inside of controllers/users.js
const User = require('../models/user'); // require user model
const bcrypt = require('bcrypt');       // require bcrypt module
const SALT_ROUNDS = 10;                 // the salt round we'll use 


module.exports = {
    new: newUser,
    signUp,
    signIn,
    login,
    dashboard,
    logout,
};

function newUser(req, res) {
    res.render('users/new');
}

function signUp(req, res) {
    // salt & hash password
    //assign that value to req.body.password 
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUNDS));
    //create the user document and save to the users collection - model.create 
    User.create(req.body, function (error, newUser) {
        console.log(newUser) // let's check out our new user
        res.redirect('/'); // redirect to
    });
}

// new controller action defined
function signIn(req, res) {
    res.render('users/login');
}

function login(req, res) {
    //look up the user by the username
    User.findOne({
        username: req.body.username
    }, function (error, foundUser) {
        //if user not found -> respond with message saying bad credentials
        if (foundUser === null) {
            res.redirect('/users/signin');
        } else {
            // if user found -> compare passwords
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            // if password matches -> create a session using the userId
            if (doesPasswordMatch) {
                req.session.userId = foundUser._id;
                res.redirect('/users/dashboard');
            } else {
                // if password does not match -> respond with message saying bad credentials
                res.redirect('/users/signin');
            }
        }
    });
}

function dashboard(req, res) {
    if(req.session.userId) {
        res.render('users/dashboard');
    } else {
        res.redirect('/users/signin');
    }
}

function logout(req, res) {
    req.session.destroy();
    res.redirect('/');
}