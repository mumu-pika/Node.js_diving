const path = require('path')
const express = require('express')
const productsController = require('../controllers/products')

/* 
  This router is like a mini express app tied
  to the other express app or pluggable into
  the other express app.
*/
const router = express.Router()

// admin/add-product => GET
// 这里传递的是对productsController.getAddProduct函数引用
router.get('/add-product', productsController.getAddProduct)

// admin/add-product => POST
router.post('/add-product', productsController.postAddProduct)

// 这里传递的是对productsController.getAddProduct函数引用
router.get('/products', productsController.getAddProduct)

module.exports = {
  router, 
}
