var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST login. Placeholder: send users straight to dashboard */
router.post('/login', function(req, res, next) {
  res.json({ redirect: 'dashboard' });
});

module.exports = router;
