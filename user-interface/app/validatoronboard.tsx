import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VendorOnboard from '@/components/Vendor/VendorOnboard/VendorOnboard'

const validatoronboard = () => {
  return (
    <View style={styles.container}>
      <VendorOnboard/>
    </View>
  )
}

export default validatoronboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});