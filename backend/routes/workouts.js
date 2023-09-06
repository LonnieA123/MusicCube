const express = require('express');
const router = express.Router()


//GET all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

router.post('/',(req,res) => {
    res.json({msgg: 'POST new workout'})
})

router.delete('/:id',(req,res) => {
    res.json({msgg: 'DELETE new workout'})
})

router.patch('/:id',(req,res) => {
    res.json({msgg: 'UPDATE new workout'})
})


module.exports = router