import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import {observer} from 'mobx-react'
import MessageBox from './MessageBox.jsx'

import store from './MessageStore'

@observer
export default class MessageContainer extends React.Component {

  onKeyPress (e) {
    if (e.which === 13) {
      const message = e.target.value.trim()
      if (message) {
        store.add(e.target.value)
        e.target.value = ''
      }
    }
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12} sm={12}>
            <input style={{width: '80vw'}}
              type='text'
              onKeyPress={this.onKeyPress.bind(this)}
            />
          </Col>
        </Row>
        <Row>{''}</Row>
        <MessageBox messages={store.messages} />
      </Grid>
    )
  }
}
