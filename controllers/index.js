module.exports = {
    index
};

function index(req, res) {
    res.render('index');
}

// var axios = require('axios');

// const BASE_URL = 'http://data.streetfoodapp.com/1.1/';

// function index(req, res, next) {

// axios.get(BASE_URL + 'foodtrucks?limit=5').then(function(response) {
//     console.log(response);
//     res.render('index', {  
//       title: 'Cool', 
//       launches: response.data 
//   });
// });
// }