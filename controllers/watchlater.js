const watchLater = require('../models/watchLater.js')

const mongoose = require('mongoose')

const watchLaterController = async (req, res) => {
    const likedVideoData = req.body
    const addtoLikedVideo = new watchLater(likedVideoData)
    try {
        await addtoLikedVideo.save()
        res.status(200).json('added to likedVideo')
    } catch (error) {
        res.status(400).json(error)

    }
}
const allwatchLaterController = async (req, res) => {
    try {
        const files = await watchLater.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
const deletewatchLaterController = async (req, res) => {
    const { videoId: videoId, Viewer: Viewer } = req.params
    try {
        await watchLater.findOneAndDelete({
            videoId: videoId, Viewer: Viewer
        })
        res.status(200).json({ message: "removed from your watchLater" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
module.exports = { watchLaterController, allwatchLaterController, deletewatchLaterController }