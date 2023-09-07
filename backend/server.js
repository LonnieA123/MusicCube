const express = require('express');
const mongoose = require('mongoose').default
const albumRoutes = require('./routes/albums')
require('dotenv').config();

// express app
const app = express()


app.use(express.json())
// logs requests
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/albums',albumRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port ', process.env.PORT)
        })

    })
    .catch((error) => {
        console.log(error)

    })



