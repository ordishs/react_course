'use strict'

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const r = require('rethinkdbdash')(({
  host: 'localhost',
  port: 28015,
  db: 'channelChat'
}))

app.use(express.static(`${__dirname}/public`))

// not found in static files, so default to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`))

io.on('connection', function (socket) {
  console.log('a user connected')
  const cursors = []

  r.table('messages')
  .changes()
  .then((cursor) => {
    cursors.push(cursor)
    cursor.each((err, message) => {
      if (err) {
        throw err
      }
      socket.emit('message', message.new_val)
    })
  })
  .catch((err) => {
    throw err
  })

  socket.on('message', function (data) {
    r.table('messages')
    .insert(data)
    .then((result) => {
      console.log('Inserted message.')
    })
    .catch((err) => {
      throw err
    })
  })

  socket.on('disconnect', function () {
    console.log('a user disconnected')
    while (cursors.length > 0) {
      const cursor = cursors.pop()
      cursor.close()
    }
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
