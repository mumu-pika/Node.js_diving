const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter your message</title></head>')
    res.write(
      '<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }
  // process.exit() // hard exited event loop and therefore the program shut down

  // 表单重定向
  if (url === '/message' && method === 'POST') {
    const body = []
    // on() 允许我们监听某些事件, 第二个参数是应该为每个数据执行的函数
    req.on('data', (chunk) => {
      console.log('chunk: ', chunk)
      body.push(chunk)
    })

    // 监听end, 一旦完成对request data 或 incoming requests的解析, 会触发
    req.on('end', () => {
      // 对于这些chunks, 我们需要做缓存, buffer them
      // create a new buffer and add all the chunks from inside body
      // parsedBody实际上是一个缓存区, 我们将其转换为字符串
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody)
    })

    // fs.writeFileSync('message.txt', 'some messages inside ......')
    // writeFileSync会阻止后面代码的执行, 需要等待文件写入执行完毕后再继续
    fs.writeFile('message.txt', 'some messages', (err) => {})
    res.statusCode = 302
    res.setHeader('Location', '/') // 重定向会 /
    return res.end()
  }
  // set Headers
  res.setHeader('Content-Type', 'text/html')

  // write some data
  res.write('<html>')
  res.write('<head><title>snowpikachu No.1</title></head>')
  res.write('<body><h1>well done!</h1></body>')
  res.write('</html>')

  res.end()
}

module.exports = requestHandler