const express = require('express')
const { createSkid, loadAllSkids } = require('../controllers/skid_controller')
const router = express.Router()


router.get('/:po_id/view', loadAllSkids, ( req, res ) => {
    res.render('skid-view', { poId: req.params.po_id, skidList: req.body.skidList }) 
})

router.post('/:po_id/add', createSkid, loadAllSkids, (req,res) => {
    res.render('item-add', {poId: req.params.po_id}) 
})


module.exports = router