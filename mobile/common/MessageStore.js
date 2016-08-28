import {observable} from 'mobx'
const io = require('socket.io-client/socket.io')

class MessageStore {
  @observable messages = []

  constructor () {
    this.socket = io('http://localhost:3000', {jsonp: false})
    this.socket.on('message', (message) => {
      console.log(message)
      this.messages = this.messages.concat([message])
    })
  }

  add (message) {
    this.socket.emit('message', {message})
  }
}

module.exports = new MessageStore()
