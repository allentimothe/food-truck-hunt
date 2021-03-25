const mongoose = require('mongoose');

// 🚨 Don't forget to add your username and password to your connection URI

const connectionURI = 'mongodb+srv://admin:abc1234@sei.f8u5w.mongodb.net/food-truck-admin?retryWrites=true&w=majority'

// shortcut to mongoose.connection object
const db = mongoose.connection;

mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});