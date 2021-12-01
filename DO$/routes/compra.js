const express = require('express')
const router = express.Router()
const CompraController = require('../controllers/CompraController')

router.get('/', CompraController.index)
router.get('/sacola', CompraController.sacola)
router.get('/entrega', CompraController.entrega)

module.exports = router