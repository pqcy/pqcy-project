const express = require('express')
const path = require('path');
var router = express.Router(); // Declare an object using a functional module 

router.get('/', function(req, res){
  res.render('home/welcome');
});
router.get('/about', function(req, res){
  res.render('home/about');
});

// navbar
router.get('/definition', function(req, res){
  res.render('home/definition');
});
router.get('/algorithm', function(req, res){
  res.render('home/algorithm');
});
router.get('/guide', function(req, res){
  res.render('home/guide');
});
router.get('/community', function(req, res){
  res.render('home/community');
});

router.get('/quiz', function(req, res){
  res.render('home/quiz');
});

router.get('/goPqc', function(req, res){
  res.render('home/goPqc');
});

module.exports = router;

