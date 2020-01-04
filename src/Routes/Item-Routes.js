const express = require('express')
const { loadAllItems, createItem, itemSearch } = require('../controllers/item_controller')
const router = express.Router()

router.get('/:po_id/:sk_id/view', loadAllItems, (req,res) => {
    console.log(req.body.itemList)
    res.render('item-view',{ poId: req.params.po_id, itemList: req.body.itemList })
})
router.post('/search', itemSearch, ( req, res) => {
    console.log(req.body.search)
    res.render('itemSearch', {itemList: [req.body.search]})
})
router.get('/search', (req, res) => {
    res.render('itemSearch')
})
router.get('/add/:po_id', (req, res) => {
    res.render('item-add', {poId: req.params.po_id})
})

router.post('/add/:po_id', createItem, loadAllItems, (req,res) => {
    res.render('item-add', { poId: req.params.po_id }) 
})


module.exports = router