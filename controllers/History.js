const History = require('../models/History.js')

const mongoose = require('mongoose')

const HistoryController = async (req, res) => {
    const likedVideoData = req.body
    const addtoLikedVideo = new History(likedVideoData)
    try {
        await addtoLikedVideo.save()
        res.status(200).json('added to likedVideo')
    } catch (error) {
        res.status(400).json(error)

    }
}
const allHistoryController = async (req, res) => {
    try {
        const files = await History.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
const clearHistoryController = async (req, res) => {
    const { userId: userId } = req.params
    try {
        await History.deleteMany({
            Viewer: userId
        })
        res.status(200).json({ message: "removed from your History" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}
module.exports = { HistoryController, allHistoryController, clearHistoryController }