import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CreateNewPassword from '@/components/Client/ForgotPassword/CreateNewPassword'


const createNewPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
     <CreateNewPassword/>
    </SafeAreaView>
  )
}

export default createNewPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});