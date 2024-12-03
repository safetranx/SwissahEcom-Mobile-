import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShoppingCart from '@/components/Client/ShoppingCart/ShoppingCart'

const cart = () => {
  return (
    <View style={{flex: 1,
      paddingTop:Platform.OS === 'android' ? 40 : 0,
    }}>
      <ShoppingCart/>
    </View>
  )
}

export default cart

const styles = StyleSheet.create({})