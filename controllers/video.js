const videoFiles = require('../models/videoFiles')
const uploadVideo = async (req, res, next) => {
    if (req.file === undefined) {
        res.status(404).json({ message: "plz upload a '.mp4 video file only" })
    } else {
        try {
            const file = new videoFiles({
                videoTitle: req.body.title,
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: req.file.size,
                videoChannel: req.body.channel,
                Uploader: req.body.Uploader,
            })
            await file.save()
            res.status(201).send('File Uploaded successfully')
        } catch (error) {
            res.status(400).send(error.message)

        }
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