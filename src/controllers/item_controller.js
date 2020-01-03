const Po = require('../DB/models/Po-Model')
const Skid = require('../DB/models/Skid-Model')
const Item = require('../DB/models/Item-model')

const createItem = async (req, res, next) => {
    const { skidNumber} = req.body
    const item = new Item(req.body)
    item.po = req.params.po_id
    await item.save()
    try {
        list = await Po.findById( req.params.po_id ).populate({
            path: 'skids',
            match: { skidNumber }
        })
        
        console.log(item)
        if (!list.skids[0]) throw new Error()
        list.skids[0].item.push(item)
        list.save()
        await Promise.all([list, item.save()])
        next()
    } catch (error) {
        console.log('Error')
    }

}

const loadAllItems = async (req, res, next) => {
    try {
        const list = await Item.find({
            po: req.params.po_id
        })

        if (!list) throw new Error()
        req.body.itemList = list
        next()
    }
    catch (err) {
        console.log({ error: 'line: 29 - item_controller'})
    }
}

module.exports = {
    createItem,
    loadAllItems
}