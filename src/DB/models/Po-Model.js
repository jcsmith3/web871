const mongoose = require('mongoose')

const PoSchema = new mongoose.Schema({
    poNumber: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
        required: true,
    },
    vendorId: {
        type: String,
        required: true
    },
    skids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skid'
    }],
    unloadCount: {
        type: Number,
        required: true
    },
    location: {
        type: String,
    },
    staged: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const Po = mongoose.model( 'po', PoSchema )

module.exports = Po