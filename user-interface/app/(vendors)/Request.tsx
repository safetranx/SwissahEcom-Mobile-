import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Request = () => {
  return (
     <View style={styles.container}>
      <Text>Request</Text>
    </View>
  )
}

export default Request

const styles = StyleSheet.create({
      container:{
            flex:1,
            backgroundColor:"white",
            paddingTop:Platform.OS === "android" ? StatusBar.currentHeight  : 0,
        },
    
})