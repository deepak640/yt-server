const express = require('express')

const { postcomment, editcomment, deletecomment, getcomment, location } = require('../controllers/comment.js')
const auth = require('../middleware/auth.js')
var router = express.Router();

router.post('/post', auth, postcomment)
router.get('/get', getcomment)
router.delete('/delete/:id', deletecomment)
router.patch('/edit/:id', auth, editcomment)
router.patch('/location/:id', auth, location)
module.exports = router