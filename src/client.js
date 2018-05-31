/*
 * Not sure if this is the right solution, but from the docs it looked like transport
 * has to return a WritableStream.
 */
const http = require('http-browserify')
const service = require('./service')

function transport(callback) {
  return http.request({ method: 'POST', port: 5555, withCredentials: false })
    .on('response', (response) => callback(null, response))
    .on('error', callback)
}

const client = service.createClient({ transport })

client.getSampleItem({ name: 'ImASample' }, (error, item) => {
  console.log(error, item)
})

