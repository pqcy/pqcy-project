const express = require('express')
const path = require('path');
var router = express.Router(); // Declare an object using a functional module 

router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/about', function(req, res){
  res.render('home/about');
});

router.get('/eduBasic', function(req, res){
  res.render('home/eduBasic');
});

router.get('/eduMid', function(req, res){
  res.render('home/eduMid');
});

router.get('/eduAdv', function(req, res){
  res.render('home/eduAdv');  
});

router.get('/asyGuide', function(req, res){
  res.render('home/asyGuide');
});

router.get('/community', function(req, res){
  res.render('home/community');
});

router.get('/quiz', function(req, res){
  res.render('home/quiz');
});

module.exports = router;

