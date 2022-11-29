const path = require('path')

const express = require('express')
// const http = require('http')
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')

const app = express()
const adminRoutes = require('./routes/admin')
const shopRouters = require('./routes/shop')

// app.engine()可以用来注册一个新的模板引擎, 还需要给引擎起一个名字
app.engine(
  'handlebars',
  engine({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs',
  })
) // register a Handlebars view engine

// app.set(name, value) 全局设置值 对应的可以用app.get()来调用
// 需要注意的是, pug已经是内置引擎了, 所以可以直接用app.set()
// app.set('view engine', 'pug')
app.set('view engine', 'handlebars')
app.set('views', 'views') // express中默认会设置views为动态编译的模板

// extended: false：表示使用系统模块querystring来处理，也是官方推荐的
// extended: true：表示使用第三方模块qs来处理
app.use(bodyParser.urlencoded({ extended: false }))

// 这里正确的设置,可以保证CSS的路径
// express.static()可以传入静态服务的文件夹的路径
// 此外, 可以注册多个静态文件, 然后请求会被汇集到所有这注册的文件中
app.use(express.static(path.join(__dirname, 'public')))

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
app.use('/admin', adminRoutes.router)

// Error page
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  res.status(404).render('404')
})

// const server = http.createServer(app)
// server.listen(3000, () => {
//   console.log("server listening at port 3000 ...")
// })

app.listen(3000, () => {
  console.log('server listening at port 3000 ...')
})
