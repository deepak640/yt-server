const comment = require('../models/comment.js')
const mongoose = require('mongoose')


const postcomment = async (req, res) => {
    const commentData = req.body
    const postcomment = new comment(commentData)
    console.log("🚀 ~ file: comment.js:8 ~ postcomment ~ postcomment:", postcomment)
    try {
        await postcomment.save()
        res.status(200).json('post the comment')
    } catch (error) {
        res.status(400).json(error)

    }
}

const getcomment = async (req, res) => {
    try {
        const comments = await comment.find()
        res.status(200).send(comments)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
const deletecomment = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Comments Unavailable..");
    }
    try {
        await comment.findByIdAndRemove(_id)

        res.status(200).json({ message: "deleted comment" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

const editcomment = async (req, res) => {
    const { id: _id } = req.params
    const { commentBody } = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("comment Unavailable..");
    }
    try {
        const updateComment = await comment.findByIdAndUpdate(_id,
            {
                $set: { "commentBody": commentBody }
            }
        )
        res.status(200).json(updateComment)
    } catch (error) {
        res.status(400).json(error.message)
    }

}


const location = async (req, res) => {
    const { id: _id } = req.params
    const { address } = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Unavailable..");
    }
    try {
        const updateLike = await comment.findByIdAndUpdate(_id, {
            $set: { "address": address }
        })
        res.status(200).json(updateLike)
    } catch (error) {
        res.status(400).json("error:", error)

    }
}
module.exports = { postcomment, editcomment, deletecomment, getcomment, location }