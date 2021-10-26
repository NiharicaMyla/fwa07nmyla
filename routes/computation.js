
var express = require('express');
var router = express.Router();
var x ;
/* GET users listing. */
router.get('/', function (req, res, next) {
 
x = Math.floor(Math.cosh()*100)+1;
// res.send('hello');
res.write('[Math.cosh()] applied to ' + `${ [x]}` + ' is ' + `${[Math.cosh(x)]}\n`);
 
res.write('[Math.log2()] applied to ' + `${ [x]}` + ' is ' + `${[Math.log2(x)]}`);
res.end();
});

module.exports=router;