const { Service, readProtocol } = require('avsc')

// Makeshift platform testing...
function isNode() {
  return typeof global === 'object'
    && String(global) === '[object global]'
    && typeof process === 'object'
    && typeof __dirname === 'string'
}

// Load the avdl string
function getAvdlString() {
  if (isNode()) {
    const fs = require('fs')
    const path = require('path')
    return fs.readFileSync(path.resolve(__dirname, 'sample.avdl'), 'utf-8')
  } else {
    return require('./sample.avdl')
  }
}

const protocol = readProtocol(getAvdlString())
const service = Service.forProtocol(protocol)

module.exports = service
