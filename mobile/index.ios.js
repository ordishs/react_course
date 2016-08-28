import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

import MessageList from './common/MessageList.js'

class mobile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <MessageList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: 'gainsboro'
  }
})

AppRegistry.registerComponent('mobile', () => mobile)
