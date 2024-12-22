import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VendorOnboard from '@/components/Vendor/VendorOnboard/VendorOnboard'

const rideronboard = () => {
  return (
    <View style={styles.container}>
     <VendorOnboard/>
    </View>
  )
}

export default rideronboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});