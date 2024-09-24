const model = require('../models/workoutModel')

const mongoose = require('mongoose')

//here we create function for router so it cleaner

//get all data
const getData = async(req,res) =>{
    const workouts = await model.find({})
    res.status(200).json(workouts)
}

//post data
const postData = async(req,res) =>{
    const {title, reps, load} = req.body
    try{
    const workout = await model.create({title, reps, load})
    res.status(200).json(workout)
    } catch(error){
    res.status(400).json(error)
    }
}

// find single data
const findSingleData = async(req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error: 'Data is not found'})
    }

    const workout = await model.findById({_id:id})
    if(!workout){
        res.status(404).json({error: 'Data is not found'})
    }
    res.status(200).json(workout)
}

//delete data
const deleteData = async(req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'error'})
    }

    const workout = await model.findByIdAndDelete({_id: id})
    if(!workout){
        res.status(404).json({error: 'data is not found'})
    }
    res.status(200).json(workout)
}

//update data
const updateData = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'data is not available'})
    }

    const workout = await model.findByIdAndUpdate({_id: id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error: 'Data is not available'})
    }
    res.status(200).json(workout)
}
module.exports = {getData, postData, findSingleData, deleteData, updateData}