const Po = require('../DB/models/Po-Model')

const createPo = async ( req, res, next ) => {
    await new Po(req.body).save()
    next()
}

const loadAllPos = async ( req, res, next ) => {
    req.body.poList = await Po.find()
    next()
}

module.exports = {
    createPo,
    loadAllPos,
}