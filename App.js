import React, {useState} from 'react'
import {Text, StyleSheet, View, TouchableOpacity, StatusBar} from 'react-native'

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32, 0, 126)')
  const [reset, setResetColor] = useState('')
  const changeBg = () => {
    const red = Math.floor(Math.random() * 350)
    const green = Math.floor(Math.random() * 350)
    const blue = Math.floor(Math.random() * 350)
    setRandomColor(`rgb(${red}, ${green}, ${blue})`)
  }
  const resetBg = () => {
    setRandomColor('rgb(0, 0, 0)')
  }
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBg}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <TouchableOpacity onPress={resetBg}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: '#ffffff',
    borderRadius: 10,
    textTransform: 'uppercase',
  },
})

export default App
