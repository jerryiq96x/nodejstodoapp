var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();

var setupController = require('./api/controller/setupController');
var todoController = require('./api/controller/todoController');
var port = process.env.port || 3000;
// cau hinh middleware
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set("view engine",'ejs');

//db info
mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);


app.get('/',function(req,res){
    res.render('index');
});

app.listen(port,function(){
    console.log('App is listening on port: '+ port);
});