const express = require('express')
const model = require('../models/workoutModel')

const router = express.Router()

router.get('/',(req, res)=>{
    res.json({mssg: 'get all mssge'})
})

router.get('/:id', (req, res)=>{
    res.json({mssg: 'single mssg'})
})

router.post('/', async(req,res) =>{
    const {title, reps, load} = req.body

    try{
        const workout = await model.create({title, reps, load})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json(error)
    }
})

router.delete('/:id',(req,res) =>{
    res.json({mssg: 'delete msg'})
})

router.patch('/:id', (req,res) =>{
    res.json({mssg: 'patch'})
})

module.exports = router