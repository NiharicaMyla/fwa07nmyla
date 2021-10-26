var express = require("express");
var router = express.Router();
var num1;
var log;
var cosh;
var floor;

/* GET users listing. */

router.get("/", function (req, res, next) {
  num1 = Math.random() * (100 - 1) + 1;
  log = Math.log(num1);
  cosh = Math.cosh(45);
  floor = Math.floor(num1);
  res.send(`log of ${num1} is: ${log} <br>
    cosh of 45 is: ${cosh} <br>
         floor of ${num1} is: ${floor}`);
});

module.exports = router;