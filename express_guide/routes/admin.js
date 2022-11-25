const express = require('express')

/* 
  This router is like a mini express app tied
  to the other express app or pluggable into
  the other express app.
*/
const router = express.Router()

router.get('/add-product', (req, res, next) => {
  console.log('add product')
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">add</button></form>'
  )
})

router.post('/product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router