// 将router文件中的逻辑分离出来

// 引入models中的product类
const Product = require('../models/product-db')
// const products = [] // 存储添加产品的数组
const getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

const postAddProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const description = req.body.description
  const price = req.body.price
  const products = new Product(title, imageUrl, description, price)
  products.save().then(() => {
    res.redirect('/')
  }).catch(err => console.log(err))
  // products.push({ title: req.body.title })
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
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
}
