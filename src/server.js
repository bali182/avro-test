const http = require('http')
const service = require('./service')
const server = service.createServer()

server.onGetSampleItem((item, callback) => {
  callback(null, item)
})

const httpServer = http.createServer()

httpServer.on('request', (req, res) => {
  // Had to add this since client is running on a different port
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  server.createChannel((callback) => {
    callback(null, res);
    return req;
  });
})

httpServer.listen(5555);