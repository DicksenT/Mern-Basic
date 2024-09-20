const express = require('express')
const {
    getData,
    postData
} = require('../controllers/workoutControllers')

const router = express.Router()

//get Data
router.get('/',getData)

//get single data
router.get('/:id', (req, res)=>{
    const {id} = req.params

    const workout = model.findById({id})
    if(!workout){
        res.status(404).json({mssg: "can't find id"})
    }
})


//post data
router.post('/', postData)

//delete data
router.delete('/:id',(req,res) =>{
    res.json({mssg: 'delete msg'})
})

//update data
router.patch('/:id', (req,res) =>{
    res.json({mssg: 'patch'})
})

module.exports = router