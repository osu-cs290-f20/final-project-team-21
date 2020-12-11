var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var data = require('./database.json');

// console.log(data[1].words);

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.listen(port, function () {
    console.log("\n== Server is listening on port", port);
    console.log("\nworking ")
  });

app.get('/',function(req,res,next){
    res.status(200).render('home_page');
});

app.get('/create',function(req,res,next){
    res.status(200).render('create_page');
});

//app.get('/share',function(req,res,next){
//  res.status(200).render('share_creator');
//});

app.get('/:n',function(req,res,next){
  var n_array=req.params.n;
  if(data[n_array])
  res.status(200).render('play_main',data[n_array]);
  else
  next();
});

//app.get('/play',function(req,res,next){
//  res.status(200).render('play_main');
//});

app.get('/enter',function(req,res,next){
  res.status(200).render('enter_code');
});

//app.get('/done',function(req,res,next){
//  res.status(200).render('play_done');
//});

app.get('*', function (req, res) {
    // res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    res.status(404).render('404');
  });

