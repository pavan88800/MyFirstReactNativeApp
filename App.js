import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>1one1</Text>
        <Text style={styles.text}>1two</Text>
        <Text style={styles.text}>1Three</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    width: 200,
  },
})

export default App
