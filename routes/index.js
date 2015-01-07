var express = require('express');
var router = express.Router();

var controllers = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res) {
	controllers.index(req,res);
});

module.exports = router;
