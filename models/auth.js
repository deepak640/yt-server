const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    joinedon: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("User", userSchema)