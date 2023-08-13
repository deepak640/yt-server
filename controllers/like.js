const videoFiles = require('../models/videoFiles')
const mongoose = require('mongoose')
const likeController = async (req, res) => {
    const { id: _id } = req.params
    const { Like } = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Chanel Unavailable..");
    }
    try {
        const updateLike = await videoFiles.findByIdAndUpdate(_id, {
            $set: { "Like": Like }
        })
        res.status(200).json(updateLike)
    } catch (error) {
        res.status(400).json("error:", error)

    }
}
module.exports = { likeController }