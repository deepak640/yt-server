var express = require('express');
var router = express.Router();
const login = require('../controllers/auth')
const { updateChannelData, getAllChannels } = require('../controllers/channel.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',login)
router.patch('/update/:id',updateChannelData)
router.get('/getAllChannels', getAllChannels)
module.exports = router;
