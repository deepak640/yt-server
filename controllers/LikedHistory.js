const LikedHistory = require('../models/LikedHistory.js')

const mongoose = require('mongoose')

const LikedHistoryController = async (req, res) => {
    const likedVideoData = req.body
    const addtoLikedVideo = new LikedHistory(likedVideoData)
    try {
        await addtoLikedVideo.save()
        res.status(200).json('added to likedVideo')
    } catch (error) {
        res.status(400).json(error)

    }
}
const allLikedHistoryController = async (req, res) => {
    try {
        const files = await LikedHistory.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
const clearLikedHistoryController = async (req, res) => {
    const { userId: userId } = req.params
    try {
        await LikedHistory.deleteMany({
            Viewer: userId
        })
        res.status(200).json({ message: "removed from your LikedHistory" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
module.exports = { LikedHistoryController, allLikedHistoryController, clearLikedHistoryController }