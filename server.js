'use strict'

const express = require('express')
const app = express()
const http = require('http').Server(app)

app.use(express.static(`${__dirname}/public`))

// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`))

http.listen(3000, function () {
  console.log('listening on *:3000')
})
