var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const body = req.body;
  console.log(body + " body");
});

module.exports = router;
