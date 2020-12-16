var express = require('express');
var router = express.Router();

/// --- Code ORDER
router.use(function timeLog (req, res, next) {
    console.log('\n\t ORDER controller - Time: ', Date().toString());
    next();
})

/////..................................................
router.get( '/', orderPage );
function orderPage(req, res) {
	res.render("order");
}

/// --- EXports
module.exports = router;

