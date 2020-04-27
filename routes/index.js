var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hey there!",
    user: 'Lauren',
    added: new Date()
  },
  {
    text: "Hello World",
    user: 'Drew',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res){
  res.render('new', {title: 'New Message'});
});

router.post('/new', function(req, res){
  messages.push({ text: req.body.text, user: req.body.user, added: new Date()});
  res.redirect('/');
});

module.exports = router;
