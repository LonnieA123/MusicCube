const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({

            title: {
                type: String,
                required: true,
            },
            artist: {
                type: String,
                required: true,
            },
            // fields will be added later
            // release_date: Date,
            // genre: [String],
            // tracks: [
            //     {
            //         title: String,
            //         duration: String,
            //     },
            // ],
            //label: String,
            cover: String,

}, {timestamps: true})

module.exports = mongoose.model('Album',albumSchema)