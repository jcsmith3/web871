const mongoose = require('mongoose')

const SkidSchema = new mongoose.Schema(
    {
        skidNumber: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: false,
            required: true,
        },
        destination: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        item: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item'
        }]
    }
)

const Skid = mongoose.model('skid', SkidSchema)

module.exports = Skid