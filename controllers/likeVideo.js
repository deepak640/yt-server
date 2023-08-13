const likedVideo = require('../models/likedVideo.js')

const mongoose = require('mongoose')

const likeVideoController = async (req, res) => {
    const likedVideoData = req.body
    const addtoLikedVideo = new likedVideo(likedVideoData)
    try {
        await addtoLikedVideo.save()
        res.status(200).json('added to likedVideo')
    } catch (error) {
        res.status(400).json(error)

    }
}
const alllikeVideoController = async (req, res) => {
    try {
        const files = await likedVideo.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
const deletelikeVideoController = async (req, res) => {
    const { videoId: videoId, Viewer: Viewer } = req.params
    try {
        await likedVideo.findOneAndDelete({
            videoId: videoId, Viewer: Viewer
        })
        res.status(200).json({ message: "removed from your watchLater" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
module.exports = { likeVideoController, alllikeVideoController, deletelikeVideoController }