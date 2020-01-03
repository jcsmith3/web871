const express = require('express')
const { createPo,loadAllPos } = require('../controllers/po_controller')
const router = express.Router()

router.get('/', loadAllPos,
    (req, res) => {
        res.render('po-view', {poList: req.body.poList})
    })

router.post('/', createPo, loadAllPos, (req, res) => {
    res.render('po-view', { poList: req.body.poList})
})


module.exports = router