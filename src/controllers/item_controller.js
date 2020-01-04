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
        res.status(404).send({error: 'Ooops'})
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
        res.status(404).send({error: 'Something went wrong!'})
    }
}

const itemSearch = async ( req, res, next ) => {

    try {
        const item = await Item.findOne({barCode: req.body.itemSearch})
        console.log(item)
        if ( !item ) throw new Error()
        req.body.search = item
        next()
    }
    
    catch (error) {
       console.log(error) 
       res.status(404).send('Item not found')
    }
}

module.exports = {
    itemSearch,
    createItem,
    loadAllItems
}