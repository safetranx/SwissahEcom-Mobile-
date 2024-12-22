import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
  }
})