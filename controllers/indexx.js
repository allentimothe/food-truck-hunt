var axios = require('axios');

const BASE_URL = 'https://api.spacexdata.com/v3/';

function indexx(req, res, next) {

axios.get(BASE_URL + 'launches?limit=5').then(function(response) {
    console.log(response);
    res.render('index', {  
      title: 'Space X is aight', 
      launches: response.data 
  });
});
}
module.exports = {
  indexx,
}
