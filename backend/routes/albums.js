const express = require('express')
const {
    getAlbums,
    getAlbum,
    createAlbum,
    deleteAlbum,
    updateAlbum
} = require('../controllers/albumController')

const router = express.Router()

// GET all albums
router.get('/', getAlbums)

// GET a single Album
router.get('/:id', getAlbum)

// POST a new Album
router.post('/', createAlbum)

// DELETE a Album
router.delete('/:id', deleteAlbum)

// UPDATE a Album
router.patch('/:id', updateAlbum)

module.exports = router