import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserLogin from '@/components/Client/UserLogin'

const userlogin = () => {
  return (
    <View style={styles.container}>
      <UserLogin />
    </View>
  )
}

export default userlogin

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})