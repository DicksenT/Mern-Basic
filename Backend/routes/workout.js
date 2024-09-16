const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.json({mssg: 'get all mssge'})
})

router.get('/:id', (req, res)=>{
    res.json({mssg: 'single mssg'})
})

router.post('/',(req,res) =>{
    res.json({mssg: 'post msg'})
})

router.delete('/:id',(req,res) =>{
    res.json({mssg: 'delete msg'})
})

router.patch('/:id', (req,res) =>{
    res.json({mssg: 'patch'})
})

module.exports = router