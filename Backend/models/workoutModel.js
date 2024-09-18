/*this is to set model of what we expect to send to db, in this case we want
title, reps, and load, we can create another one with another data, but in another file*/ 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type:Number,
        required: true
    }
})


//remember to export it
module.exports = mongoose.model('workout', workoutSchema)