const express = require('express');
const Album = require('../models/albumModel')
const router = express.Router()


//GET all albums (GET ALL PROFILES)
router.get('/', (req,res) => {
    res.json({mssg: 'GET all albums'})
})

//GET specific album (will be GET a specific profile in the future)
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single albums'})
})

//POST new workout
router.post('/',async (req,res) => {
    const {title, artist, cover} = req.body
    try{
        const album = await Album.create({title,artist,cover})
        res.status(200).json(album)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

//DEL workout
router.delete('/:id',(req,res) => {
    res.json({msgg: 'DELETE album'})
})

//UPDATE workout
router.patch('/:id',(req,res) => {
    res.json({msgg: 'UPDATE album'})
})


module.exports = router