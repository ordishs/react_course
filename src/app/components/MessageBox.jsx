import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {ListGroup} from 'react-bootstrap'
import Message from './Message.jsx'

export default class MessageBox extends Component {
  componentDidUpdate () {
    this.scrollToBottom()
  }

  scrollToBottom () {
    const messageBox = ReactDOM.findDOMNode(this.refs.messageBox)
    const scrollHeight = messageBox.scrollHeight
    const height = messageBox.clientHeight
    const maxScrollTop = scrollHeight - height
    messageBox.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  render () {
    return (
      <ListGroup
        ref='messageBox'
        style={{
          border: '1px solid black',
          minHeight: '80vh',
          maxHeight: '80vh',
          overflowY: 'scroll'
        }}>
        {this.props.messages.map((message) => {
          return <Message key={message.id} message={message} />
        })}
      </ListGroup>
    )
  }
}

MessageBox.propTypes = {
  messages: PropTypes.object.isRequired
}
