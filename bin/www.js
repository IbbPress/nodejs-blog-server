const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT, () => {
  console.log('server listenning at localhost:8000')
})