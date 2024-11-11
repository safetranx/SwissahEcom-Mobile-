import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgotPassword from '@/components/Client/ForgotPassword/ForgotPassword'

const forgot = () => {
  return (
    <View style={styles.container}>
    <ForgotPassword/>
    </View>
  )
}

export default forgot

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
  }
})