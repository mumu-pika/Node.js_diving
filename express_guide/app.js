const express = require('express')
// const http = require('http')
const bodyParser = require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop')

// extended: false：表示使用系统模块querystring来处理，也是官方推荐的
// extended: true：表示使用第三方模块qs来处理
app.use(bodyParser.urlencoded({ extended: false }))
/* 
  middleware 中间件
  允许将代码拆分, 体现出the pluggable nature of express(可插拔特性),
  可以在其中轻松添加其他第三方包

  app.use()允许我们添加一个新的中间件功能
*/
// app.use()接受一组所谓的请求处理程序, 也有一些其他的用例
// app.use((req, res, next) => {
//   console.log('In the first middleware')
//   // Allows the request to continue to the next middleware in line
//   next() // 调用下一个中间件
// })

// app.use((req, res, next) => {
//   console.log('In the second middleware')
//   res.send('<h1>hello express</h1>')
// })

// parse incoming request
// we need install `body-parser`

// app.use('/', (req, res, next) => {
//   console.log('start running...')
//   next()
// })

app.use(shopRouters)
app.use(adminRoutes)

// const server = http.createServer(app)
// server.listen(3000, () => {
//   console.log("server listening at port 3000 ...")
// })

app.listen(3000, () => {
  console.log('server listening at port 3000 ...')
})
