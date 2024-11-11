import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from '@/components/Client/Dashboard/Dashboard'

const dashboard = () => {
  return (
    <View style={styles.container}>
      <Dashboard/>
    </View>
  )
}

export default dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})