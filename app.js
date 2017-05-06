var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();


 
app.use(cors());
process.env.APP_SECRET = "super secret secret";
mongoose.connect('DB-INFORMATION-HERE').then(
  () => { console.log('Connected to DB!')},
  err => { console.error(err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var userRoutes = require('./server/routes/user-route');
var categoryRoutes = require('./server/routes/category-route');
var threadRoutes = require('./server/routes/thread-route');
var postRoutes = require('./server/routes/post-route');
app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/thread', threadRoutes)
app.use('/post', postRoutes);
app.listen(3000, function(){
  console.log("App is now up and running!");
});
