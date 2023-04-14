var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');



//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gymRouter = require('./routes/gym');
var boardRouter=require('./routes/board');
var selectorRouter=require('./routes/selector');
var gym = require('./models/gym');
var Api = require('./routes/resource');
// We can seed the collection if needed on
async function recreateDB(){
// Delete everything
await gym.deleteMany();
let instance1 = new gym({Gym_name:"Ravi", Gym_Gender:'Male',Gym_Age:24});
let instance2 = new gym({Gym_name:"Raju", Gym_Gender:'Male',Gym_Age:20});
let instance3 = new gym({Gym_name:"kiran", Gym_Gender:'female',Gym_Age:22});
instance1.save().then(()=>{
  console.log("Object 1 created")
}).catch((err)=>{
  console.log(err);
})
instance2.save().then(()=>{
  console.log("Object 2 created")
}).catch((err)=>{
  console.log(err);
})
instance3.save().then(()=>{
  console.log("Object 3 created")
}).catch((err)=>{
  console.log(err);
})
}


let reseed = true;
if (reseed) { recreateDB();}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gym', gymRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', Api);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
