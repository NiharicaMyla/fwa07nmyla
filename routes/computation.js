var express = require("express");
var router = express.Router();
var num1;
var log;
var cosh;
var floor;

/* GET users listing. */

router.get("/", function (req, res, next) {
  num1 = Math.random() * (100 - 1) + 1;
  num2 = Math.random() * (100 - 1) + 1;

  log = Math.log(num1, num2);

  cosh = Math.cosh(0.5);

  floor = Math.floor(num1);

  res.send(`log applied to : ${num1}, ${num2} is ${log} <br>
        cosh applied to 0.5 is: ${cosh} <br>
            floor applied to ${num1} is: ${floor}`);
});

module.exports = router;