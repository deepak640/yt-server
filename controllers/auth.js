const jwt = require('jsonwebtoken')
const users = require('../models/auth.js')
const login = async (req, res) => {
    const { email } = req.body
    try {
        const exisitinguser = await users.findOne({ email })
        if (!exisitinguser) {
            try {
                const newUser = await users.create({ email })
                const token = jwt.sign({
                    email: newUser.email, id: newUser._id
                }, process.env.JWT_SECRET, { expiresIn: '1h' })
                res.status(200).json({ result: newUser, token })
            } catch (error) {
                res.status(500).json({ message: 'sommething went wrong' })
            }
        } else {
            const token = jwt.sign({
                email: exisitinguser.email, id: exisitinguser._id
            }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.status(200).json({ result: exisitinguser, token })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = login