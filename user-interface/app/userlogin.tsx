import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Auth from '@/components/Client/Auth'


const userlogin = () => {
  return (
    <View style={styles.container}>
      <Auth/>
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