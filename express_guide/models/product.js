// 这里我们考虑将数据存储在文件之中
const fs = require('fs')
const path = require('path')

// 获取product.json文件
const p = path.join(
  path.dirname(process.mainModule?.filename),
  'data',
  'products.json'
)
const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule?.filename),
    'data',
    'products.json'
  )
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([])
    } else {
      /* 
        因为这里readFile是异步执行的, 所以即使这里return了product,
        fetchAll仍然不会获取到, 所以这里采用将res.render作为回调函数传入,
        并在这里异步直接执行。
      */
      cb(JSON.parse(fileContent.toString('utf-8')))
    }
  })
}

module.exports = class Product {
  constructor(t) {
    this.title = t
  }

  save() {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }
}
