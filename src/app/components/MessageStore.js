/* global io */
import {observable} from 'mobx'

class MessageStore {
  @observable messages = []

  constructor () {
    this.socket = io()
    this.socket.on('message', (message) => {
      this.messages = this.messages.concat([message])
    })
  }

  add (message) {
    this.socket.emit('message', {message})
  }
}

const store = window.store = new MessageStore()

module.exports = store
