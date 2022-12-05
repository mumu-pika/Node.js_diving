// 将router文件中的逻辑分离出来

// 引入models中的product类
const Product = require('../models/product')
// const products = [] // 存储添加产品的数组
const getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

const postAddProduct = (req, res, next) => {
  const products = new Product(req.body.title)
  products.save()
  // products.push({ title: req.body.title })
  res.redirect('/')
}

const getProducts = (req, res, next) => {
  // 传送File
  /* 
    __dirname是全局变量，holds the absolute path on our operating system
    to this project folder.
    Attention!
      不用加斜杠, path.join会根据操作系统环境自动配置
      window是反斜杠, linux是正斜杠
  */

  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  Product.fetchAll((products) => {
    // 使用模板引擎, 在第二个参数中传入动态改变的属性值
    res.render('shop', {
      pageTitle: 'shop page',
      prods: products,
      docTitle: 'My shop',
      path: '/',
      hasProducts: products.length > 0,
    })
  })
}
module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts
}
