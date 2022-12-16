const express = require('express')
const path = require('path');
var router = express.Router(); // Declare an object using a functional module 

// main, about us
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
router.get('/communication', function(req, res){
  res.render('home/communication');
});
router.get('/community', function(req, res){
  res.render('home/community');
});

module.exports = router;

