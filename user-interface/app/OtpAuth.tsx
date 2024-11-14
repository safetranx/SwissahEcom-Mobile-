import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPCollection from '@/components/Client/ForgotPassword/OTPCollection'

const OtpAuth = () => {
  return (
    <SafeAreaView style={styles.container}>
     <OTPCollection/>
    </SafeAreaView>
  )
}

export default OtpAuth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});