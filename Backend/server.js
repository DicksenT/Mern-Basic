//called so we can use whatever in .env file by using process.env
require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res
})

// using port based on what in .env project to prevent info leak
app.listen(process.env.PORT,() =>{
    console.log(`Listening to port ${process.env.PORT}`);
    
})