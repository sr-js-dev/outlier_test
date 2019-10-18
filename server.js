const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
  if (req.url === '/base64') return respondBase64(req, res)
  if (req.url === '/user') return respondUser(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello1' }))
}
function respondBase64 (req, res) {
  res.end(JSON.stringify({ msg: 'base64' }))
}
function respondUser (req, res) {
  res.end(JSON.stringify({ msg: 'user-agent' }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
