import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboard from '@/components/Onboard'

const onboard = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Onboard/>
    </SafeAreaView>
  )
}

export default onboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})