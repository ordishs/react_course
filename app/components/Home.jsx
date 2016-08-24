/* globals io */
import React from 'react'
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap'

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  componentWillMount () {
    const socket = io()

    socket.on('message', (data) => {
      this.setState({
        messages: [...this.state.messages, data]
      })
    })
  }

  render () {
    const messages = this.state.messages.map((message) => {
      return <Row key={message.id}><Col xs={12} md={8}>{JSON.stringify(message)}</Col></Row>
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
