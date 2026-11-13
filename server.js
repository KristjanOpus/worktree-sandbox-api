const { createServer } = require('node:http')
const { loadEnv } = require('./env')
const { listOrders } = require('./orders')

loadEnv()
const port = Number(process.env.PORT)

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL ?? '*')
  res.setHeader('Content-Type', 'application/json')
  if (req.url === '/orders') return res.end(JSON.stringify(listOrders()))
  res.end(JSON.stringify({ app: 'api', port }))
}).listen(port, () => console.log(`api listening on http://localhost:${port}`))
