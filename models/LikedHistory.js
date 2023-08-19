const mongoose = require('mongoose')

const LikedHistorySchema = mongoose.Schema({
    videoId: { type: String, require: true },
    Viewer: { type: String, require: true },
})
module.exports = mongoose.model('LikedHistory', LikedHistorySchema)