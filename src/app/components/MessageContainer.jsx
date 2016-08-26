/* globals io */
import React from 'react'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap'
import {observer} from 'mobx-react'

import store from './MessageStore'

@observer
export default class MessageContainer extends React.Component {
  constructor (props) {
    super(props)

    this.socket = io()

    this.state = {
      message: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange (e) {
    this.setState({
      message: e.target.value
    })
  }

  onClick (e) {
    this.socket.emit('message', {message: this.state.message})
    this.setState({
      message: ''
    })
  }

  componentWillMount () {
    this.socket.on('message', (data) => {
      store.messages.push(data)
    })
  }

  render () {
    const messages = store.messages.map((message) => {
      return <Row key={message.id}><Col xs={12} md={8}>{message.message}</Col></Row>
    })

    return (
      <Grid>
        <Row>
          <Col xsHidden xs={6} md={4}>
            <h2>Channel</h2>
            <ul>
              <li>Cool technology</li>
              <li>Where to eat</li>
              <li>Random</li>
            </ul>
            <input
              type='text'
              value={this.state.message}
              onChange={this.onChange}
            />
            <Button
              onClick={this.onClick}
            >
              Send
            </Button>
          </Col>
          <Col xs={12} md={8}>
            <Jumbotron>
              <h1>Channel Chat</h1>
              <p>The best channel chat application in the world.  Forget Slack - this beats it hands down!</p>
              <p><Button bsStyle='primary'>Learn more</Button></p>
            </Jumbotron>
          </Col>
        </Row>
        {messages}
      </Grid>
    )
  }
}