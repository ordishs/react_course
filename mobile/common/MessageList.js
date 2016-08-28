'use strict'

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'
import {observer} from 'mobx-react/native'
import {toJS} from 'mobx'

import store from './MessageStore'

@observer
class MessageList extends Component {

  constructor (props) {
    super(props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  }

  render () {
    const ds = this.ds.cloneWithRows(toJS(store.messages))
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome to Channel Chat
        </Text>
        <ListView
          style={styles.list}
          dataSource={ds}
          enableEmptySections
          renderRow={(message) => {
            console.log(message)
            return (
              <View>
                <Text style={styles.text}>
                  {message.message}
                </Text>
              </View>
            )
          }
        }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'silver',
    borderRadius: 4
  },
  text: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 4
  }
})

export default MessageList
