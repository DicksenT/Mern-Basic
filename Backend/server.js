//called so we can use whatever in .env file by using process.env
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//we set route on another file so is neater
//this one route for workout
const workoutRoute = require('./routes/workout')

//middleware

//so we can use req on another file
app.use(express.json())


app.use((req,res,next) =>{
    console.log(`Path: ${req.path}, Method: ${req.method}`);
    //we use next so when this middleware finish it can continue
    next()
    
})

//routes
//we  only need one, since the complete routine is in another that has been exported, in this case to workoutRoute
//we also can choose if we want to set url so the route only work when we got to the url
app.use('/workout',workoutRoute)

//connect to db
mongoose.connect(process.env.DB_URI)
    .then(() =>{
        // only listen/connect to port after connected to database
        // using port based on what in .env project to prevent info leak
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to database and listening to port ${process.env.PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })

