require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const {
  logger,
  appServer
} = require('./server')

// Environment
const NODE_ENV = process.env.NODE_ENV

// Port
const port = process.env.SERVER_PORT

// Initialize express
const app = express()

// Use cors
app.use(cors())

// Initialize bodyParser
app.use(bodyParser.json())

// Assign logger
app.use(logger)

// Defile headers
app.options('/graphql/*', function (req, res) {
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  res.send()
})

// Apply server middleware
appServer.applyMiddleware({
  app,
  bodyParserConfig: true,
  path: '/graphql'
})

// Static resources
app.use(express.static('public'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Start server
app.listen(port, () => {
  console.log('Server started at port', port)
})
