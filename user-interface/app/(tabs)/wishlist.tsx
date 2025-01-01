import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const wishlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>wishlist</Text>
    </SafeAreaView>
  )
}

export default wishlist

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight  : 0,
  }
})