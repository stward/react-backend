var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CarSchema = new Schema({
  name: String,
  year: String,
  color: String
})

module.exports = mongoose.model('Car', CarSchema);
