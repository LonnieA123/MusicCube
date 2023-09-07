const Album = require('../models/albumModel')
const mongoose = require('mongoose').default

// get all workouts
const getAlbums = async (req, res) => {
    const albums = await Album.find({}).sort({createdAt: -1})
    res.status(200).json(albums)
}

// get a single workout
const getAlbum = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such album'})
    }

    const album = await Album.findById(id)

    if (!album) {
        return res.status(404).json({error: 'No such album'})
    }

    res.status(200).json(album)
}

// create a new album
const createAlbum = async (req, res) => {
    const {title, artist, cover} = req.body

    // add to the database
    try {
        const workout = await Album.create({ title, artist, cover })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a album
const deleteAlbum = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such album'})
    }

    const album = await Album.findOneAndDelete({_id: id})

    if(!album) {
        return res.status(400).json({error: 'No such album'})
    }

    res.status(200).json(album)
}

// update a album
const updateAlbum = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such album'})
    }

    const album = await Album.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!album) {
        return res.status(400).json({error: 'No such album'})
    }

    res.status(200).json(album)
}

module.exports = {
    getAlbums,
    getAlbum,
    createAlbum,
    deleteAlbum,
    updateAlbum
}