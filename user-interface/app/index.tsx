import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Landing from '@/components/Landing'

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Landing/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})