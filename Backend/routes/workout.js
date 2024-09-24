const express = require('express')
const {
    getData,
    postData,
    findSingleData,
    deleteData,
    updateData
} = require('../controllers/workoutControllers')

const router = express.Router()

//get Data
router.get('/',getData)

//get single data
router.get('/:id', findSingleData)

//post data
router.post('/', postData)

//delete data
router.delete('/:id',deleteData)

//update data
router.patch('/:id', updateData)

module.exports = router