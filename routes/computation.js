
var express = require('express');
var router = express.Router();
var x ;
/* GET users listing. */
router.get('/', function (req, res, next) {
 
x = Math.floor(Math.random()*100)+1;
// res.send('hello');
res.write('[Math.random()] applied to ' + `${ [x]}` + ' is ' + `${[Math.random(x)]}\n`);
 
res.write('[Math.round()] applied to ' + `${ [x]}` + ' is ' + `${[Math.round(x)]}`);
res.end();
});

module.exports=router