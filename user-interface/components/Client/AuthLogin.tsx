import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const AuthLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='white'/>
      <View style={styles.welcome}>
        <Text style={styles.bigWelcome}>Welcome Back</Text>
        <Text>Let’s login and continue shopping</Text>
      </View>
    </SafeAreaView>
  );
}

export default AuthLogin

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    welcome:{
        paddingVertical:50,
        paddingHorizontal:20,
    },
    bigWelcome:{
        fontSize:30,
        fontWeight:"bold"
    }
})