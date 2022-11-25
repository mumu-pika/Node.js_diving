const path = require('path')

/* 
  对于 res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
  这样的获取路径的形式, 我们可以使用一个更好的方式。
  在这里定义获取path的父级目录的方法

  path.dirname()  // returns the directory name of a path
  于是我们可以借助于path.dirname()来找出哪个目录或文件

  process // 全局变量, 是在所有文件可用的变量
  process.mainModule  // start your application 启动应用的主要模块
  process.mainModule.filename // 保存有这个模块启动了

  这为我们提供了文件路径, 这个文件负责我们正在运行的app

*/

module.exports = path.dirname(process.mainModule?.filename)
