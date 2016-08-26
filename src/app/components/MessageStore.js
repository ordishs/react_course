import {observable} from 'mobx'
// import {observer} from 'mobxReact'

class MessageStore {
  @observable messages = []
}

const store = window.store = new MessageStore()

module.exports = store
