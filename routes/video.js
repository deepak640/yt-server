var express = require('express');
var router = express.Router();
const upload = require('../Helpers/fileHelpers')
const { uploadVideo, getAllvideos } = require('../controllers/video')
const { likeController } = require('../controllers/like.js')
const { viewsController } = require('../controllers/views.js')
const { likeVideoController, alllikeVideoController, deletelikeVideoController } = require('../controllers/likeVideo.js')
const { watchLaterController, allwatchLaterController, deletewatchLaterController } = require('../controllers/watchlater.js')
const { HistoryController, allHistoryController, clearHistoryController } = require('../controllers/History.js')
const auth = require('../middleware/auth.js')

router.post('/uploadVideo', auth, upload.single('file'), uploadVideo)
router.get('/getvideos', getAllvideos)
router.patch('/like/:id', auth, likeController)
router.patch('/views/:id', viewsController)
router.post('/likedVideo', auth, likeVideoController)
router.get('/getAlllikedVideo', alllikeVideoController)
router.delete('/deletelikedVideo/:videoId/:Viewer', auth, deletelikeVideoController)
router.post('/watchLater', auth, watchLaterController)
router.get('/getAllwatchLater', allwatchLaterController)
router.delete('/deletewatchLater/:videoId/:Viewer', auth, deletewatchLaterController)
router.post('/History', auth, HistoryController)
router.get('/getAllHistory', allHistoryController)
router.delete('/clearHistory/:userId', auth, clearHistoryController)
module.exports = router;
