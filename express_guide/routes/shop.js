const path = require('path')

const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  // 传送File
  /* 
    __dirname是全局变量，holds the absolute path on our operating system
    to this project folder.
    Attention!
      不用加斜杠, path.join会根据操作系统环境自动配置
      window是反斜杠, linux是正斜杠
  */

  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
})

module.exports = router