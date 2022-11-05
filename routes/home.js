const express = require('express')
var fs = require('fs');
var app = express();
var router = express.Router();

router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/about', function(req, res){
  res.render('home/about');
});

app.get('board/public/images', function(req, res) {
  fs.readFile('_logo.png', function (error, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
  });
});

module.exports = router;

