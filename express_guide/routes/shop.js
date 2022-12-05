const path = require('path')

const express = require('express')

const router = express.Router()
const productsController = require('../controllers/products-file')

router.get('/', productsController.getProducts)
router.get('/shop/product-list', productsController.getProducts)
router.get('/shop/cart', productsController.getProducts)

module.exports = router
