import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductDescription from '@/components/Client/ProductDescription/ProductDescription'

const description = () => {
  return (
    <View style={{flex:1, paddingTop:Platform.OS==='ios'?0:StatusBar.currentHeight, backgroundColor:'#fff'}}>
      <ProductDescription/>
    </View>
  )
}

export default description

const styles = StyleSheet.create({})