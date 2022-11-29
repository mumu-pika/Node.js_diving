const path = require('path')

const express = require('express')

const router = express.Router()
const adminRoutes = require('./admin')


router.get('/', (req, res, next) => {
  // 传送File
  /* 
    __dirname是全局变量，holds the absolute path on our operating system
    to this project folder.
    Attention!
      不用加斜杠, path.join会根据操作系统环境自动配置
      window是反斜杠, linux是正斜杠
  */

  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))

  const products = adminRoutes.products
  // 使用模板引擎, 在第二个参数中传入动态改变的属性值
  res.render('shop', {
    prods: products,
    docTitle: 'My shop',
    path: '/',
    hasProducts: products.length > 0
  })
})

module.exports = router