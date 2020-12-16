var express = require('express');
var router = express.Router();

/// --- Code REPORT
router.use(function timeLog (req, res, next) {
    console.log('\n\t REPORT controller - Time: ', Date().toString());
    next();
})

/////..................................................
router.get( '/', reportPage );
function reportPage(req, res) {
	res.render("report");
}

/// --- EXports
module.exports = router;

