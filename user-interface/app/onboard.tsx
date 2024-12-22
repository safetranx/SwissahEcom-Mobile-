import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboard from '@/components/Onboard'

const onboard = () => {
  return (
    <View style={styles.container}>
     <Onboard/>
    </View>
  )
}

export default onboard

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})