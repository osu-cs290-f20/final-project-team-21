var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

console.log('Data:',Database);
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/',function(req,res,next){
    res.status(200).render('home_page');
});
