import React, {Component, PropTypes} from 'react'
import {ListGroupItem} from 'react-bootstrap'

export default class Message extends Component {
  render () {
    const d = new Date(this.props.message.timestamp)
    const year = d.getFullYear()
    const month = ('00' + (d.getMonth() + 1)).slice(-2)
    const day = ('00' + d.getDate()).slice(-2)
    const hour = ('00' + d.getHours()).slice(-2)
    const min = ('00' + d.getMinutes()).slice(-2)
    const sec = ('00' + d.getSeconds()).slice(-2)

    const dateStr = `${year}-${month}-${day} ${hour}:${min}:${sec} - `
    return (
      <ListGroupItem>
        {dateStr}
        {this.props.message.message}
      </ListGroupItem>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}
