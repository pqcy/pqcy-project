
const express = require('express');
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

router.route('/quiz')
  .get(function(req, res) {
    const answer = req.query['answer'];
    if (answer === undefined) res.render('home/quiz');
    else if (answer == 2) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.write("<script>alert('정답입니다.')</script>");
      res.write("<script>window.location='/eduBasic'</script>");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.write("<script>alert('틀렸습니다.')</script>");
      res.write("<script>window.location='/quiz'</script>");
    }
    });
// router.route('/quiz')
//   .get(function(req, res){
//     const answer = req.query['answer'];
//     let quiz_num = req.query['num'];
//     if (quiz_num == undefined) {
//       quiz_num = 1;
//     }
//     const quizJson = `{
//       "1": {
//         "query": "Q. 1 + 1 = ?",
//         "exam1": "1",
//         "exam2": "2",
//         "exam3": "3",
//         "exam4": "4",
//         "correct": "2"
//       },
//       "2": {
//           "query": "Q. 14 - 9  = ?",
//           "exam1": "5",
//           "exam2": "6",
//           "exam3": "7",
//           "exam4": "8",
//           "correct": "1"
//         }
//       }`;
//     const quiz = JSON.parse(quizJson);
//     if (answer == quiz[quiz_num].correct) {
//       res.write("<script>alert('정답입니다.')</script>");
//       quiz_num = parseInt(quiz_num) + 1;
//     }
//     res.render('home/quiz', quiz[quiz_num])
//   });

router.get('/goPqc', function(req, res){
  res.render('home/goPqc');
});

router.get('/nist', function(req, res){
  res.render('home/nist');
});

module.exports = router;

