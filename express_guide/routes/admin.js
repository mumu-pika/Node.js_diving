const path = require('path')
const express = require('express')

/* 
  This router is like a mini express app tied
  to the other express app or pluggable into
  the other express app.
*/
const router = express.Router()

const products = []

// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

module.exports = {
  router,
  products,
}
