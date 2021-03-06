
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , ingredient = require("./routes/ingredient")
  , order = require("./routes/order")
  , mongoose = require("mongoose");

var app = express();
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');
//mongoose.connect('mongodb://localhost/burgers');

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/ingredient/new', ingredient.new);
app.post('/ingredient/create', ingredient.create);

app.get('/order/new', order.new);
app.post('/order/create', order.create);
app.get('/orders', order.orders);
app.post('/order/delete', order.delete);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});