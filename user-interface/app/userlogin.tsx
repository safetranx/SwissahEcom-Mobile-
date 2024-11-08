import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthLogin from '@/components/Client/AuthLogin'


const userlogin = () => {
  return (
    <View style={styles.container}>
      <AuthLogin/>
    </View>
  )
}

export default userlogin

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS === "android"?StatusBar.currentHeight:0,

    }
})