const videoFiles = require('../models/videoFiles')
const uploadVideo = async (req, res, next) => {
    console.log(req.body)
    try {
        const file = new videoFiles({
            videoTitle: req.body.title,
            filePath: req.body.filePath,
            videoChannel: req.body.channel,
            Uploader: req.body.Uploader,
        })
        await file.save()
        res.status(201).json('File Uploaded successfully')
    } catch (error) {
        res.status(400).send(error.message)

    }
}

const getAllvideos = async (req, res) => {
    try {
        const files = await videoFiles.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }

}
module.exports = { uploadVideo, getAllvideos }