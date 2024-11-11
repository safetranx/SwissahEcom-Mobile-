import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to Dashboard</Text>
    </SafeAreaView>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:"white",
    }
    
})