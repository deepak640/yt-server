const mongoose = require('mongoose')

const videoFileSchema = new mongoose.Schema({
    videoTitle: {
        type: String,
    },
    filePath: {
        type: String,
    },
    videoChannel: {
        type: String,
    },
    Like: {
        type: Number,
        default: 0,
    },
    Views: {
        type: Number,
        default: 0,
    },
    Uploader: {
        type: String,
    },
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('VideoFiles', videoFileSchema)
