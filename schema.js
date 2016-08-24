'use strict'

const r = require('rethinkdbdash')({
  host: 'localhost',
  port: 28015
})

r.dbCreate('channelChat')
.then((result) => {
  console.log(JSON.stringify(result, null, 2))
  return r.db('channelChat').tableCreate('messages')
})
.then((result) => {
  console.log(JSON.stringify(result, null, 2))
  r.getPool().drain()
})
.catch((err) => {
  throw err
})
