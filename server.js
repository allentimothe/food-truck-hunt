// Require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000; 
const indexRouter = require('./routes/index');
const session = require('express-session');
const usersRouter = require('./routes/users');
const methodOverride = require('method-override');
// var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
const reviewsRouter = require("./routes/reviews");
const locationsRouter = require("./routes/locations");



// const reviewsRouter = require("./routes/reviews");
const menusRouter = require('./routes/menus'); 
const menus2Router = require('./routes/menus2'); 

// Set up express app
const app = express();

// Connect to DB
// connect to the database with Mongoose
require('./config/database');

// Configure the app with app.set()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });

// error handler
app.use(function(err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};
  
// render the error page
res.status(err.status || 500);
res.render('error');
});

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride('_method'));

// Mount routes with app.use()
app.use('/users', usersRouter);
// app.use("/", reviewsRouter);
app.use('/', indexRouter);
app.use('/menus', menusRouter); 
app.use('/menus2', menus2Router); 
app.use("/", reviewsRouter);
app.use("/", locationsRouter);


// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});