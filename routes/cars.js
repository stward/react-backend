var express = require('express')
var Car = require('../models/car')

var router = express.Router()

router.get('/', function(req, res, next) {
  Car.
    find().
    exec(function(err, cars){
      if (err) {
        res.json(err, 'ERROR');
      } else {
        res.json(cars);
      }
    })
})

module.exports = router
