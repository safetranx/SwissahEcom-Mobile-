import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SellerDashboard from '@/components/Vendor/Dashboard/SellerDashboard'


const dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
     <SellerDashboard/>
    </SafeAreaView>
  )
}

export default dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    }
})