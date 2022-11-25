const path = require('path')
const express = require('express')

/* 
  This router is like a mini express app tied
  to the other express app or pluggable into
  the other express app.
*/
const router = express.Router()

// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  console.log('add product')
  res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
})

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router