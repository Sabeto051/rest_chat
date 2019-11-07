const mongoose = require('mongoose')
const { Schema } = mongoose

const MessageSchema = new Schema({
  owner: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    required: true,
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Message', MessageSchema)
