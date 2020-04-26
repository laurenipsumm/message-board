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

module.exports = router;
