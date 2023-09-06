const express = require('express');
const workoutRoutes = require('./routes/workouts')
require('dotenv').config();

//express app
const app = express()


app.use(express.json())
//logs requests
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})

