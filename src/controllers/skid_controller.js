const Skid = require('../DB/models/Skid-Model')
const Po = require('../DB/models/Po-Model')

const createSkid = async ( req, res, next ) => {
    const skid = new Skid(req.body)
    const po =  Po.findByIdAndUpdate(req.params.po_id, { $push: { skids: skid}})

    await Promise.all([skid.save(),po])
    next()
}

const loadAllSkids = async ( req, res, next ) => {
    const list = await Po.findById(req.params.po_id).populate({ path: 'skids', model: 'skid'})

    req.body.skidList = list.skids

    next()
}

module.exports = {
    createSkid,
    loadAllSkids
}