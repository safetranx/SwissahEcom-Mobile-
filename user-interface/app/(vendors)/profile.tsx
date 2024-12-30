import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VendorProfile from '@/components/Vendor/Profile/VendorProfile'

const profile = () => {
  return (
    <View style={styles.container}>
     <VendorProfile/>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingTop:Platform.OS === "android" ? StatusBar.currentHeight  : 0,
    },


})