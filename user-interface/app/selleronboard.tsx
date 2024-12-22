import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VendorOnboard from '@/components/Vendor/VendorOnboard/VendorOnboard'

const selleronboard = () => {
  return (
    <View style={styles.container}>
     <VendorOnboard/>
    </View>
  )
}

export default selleronboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});