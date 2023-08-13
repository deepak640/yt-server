const mongoose = require('mongoose')
const users = require('../models/auth')

const updateChannelData = async (req, res) => {
    const { id: _id } = req.params;
    const { name, desc } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("Chanel Unavailable..");
    }
    try {
        const updateData = await users.findByIdAndUpdate(
            _id,
            {
                $set: {
                    name: name,
                    desc: desc,
                },
            },
            { new: true }
        );

        res.status(200).json(updateData);
    } catch (error) {
        res.status(405).json({ message: error.message });
    }
};

const getAllChannels = async (req, res) => {
    try {
        const allChannels = await users.find()

        const allChannelDetails = []
        allChannels.forEach((channel) => {
            allChannelDetails.push({
                _id: channel._id,
                name: channel.name,
                email: channel.email,
                desc: channel.desc
            })
        });
        res.status(200).json(allChannelDetails)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = { updateChannelData, getAllChannels }