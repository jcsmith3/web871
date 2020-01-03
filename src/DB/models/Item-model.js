const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema(
    {
        barCode: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        skid: {
            type: mongoose.Types.ObjectId,
            ref: 'skid'
        },
        po: {
            type: mongoose.Types.ObjectId,
            ref: 'po'
        }

    }
)

const Item = mongoose.model('item', ItemSchema)

module.exports = Item