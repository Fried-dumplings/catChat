const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/catchat`, { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

var kittySchema = mongoose.Schema({
  name: String,
  time: {
    type: Date,
    default: Date.now()
  }
})
var Kitten = mongoose.model('Kitten', kittySchema)

var felyne = new Kitten({ name: 'Felyne' })
felyne.save()
module.exports = mongoose
