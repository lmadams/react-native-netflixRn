import React, {Component} from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import List from './components/List'
import Slide from './components/Slider'

class App extends Component {
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <Slide />
        <List />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
});

export default App