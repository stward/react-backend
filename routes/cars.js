var express = require('express')
var Car = require('../models/car')

var router = express.Router()

router.get('/', function(req, res, next) {
  Car.
    find().
    exec(function(err, cars){
      if (err) {
        res.status(err).json('ERROR')
      } else {
        res.json(cars)
      }
    })
})

router.get('/:id', function(req, res, next) {
  Car.
    findById(req.params.id).
    exec(function(err, car){
      if (err) {
        res.status(err).json('ERROR')
      } else {
        res.json(car)
      }
    })
})

module.exports = router
