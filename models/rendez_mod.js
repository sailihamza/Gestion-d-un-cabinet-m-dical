const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date:{
    type:Date,
    default:Date.now
  },
  time: {
    type: String,
    required: true
  },
  motif: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

/*
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
*/
