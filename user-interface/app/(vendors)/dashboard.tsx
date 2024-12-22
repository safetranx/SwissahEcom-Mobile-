import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>dashboard</Text>
    </SafeAreaView>
  )
}

export default dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})