import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'
import { primaryText, secondaryText } from '../utils/colors'

export default function MySlider ({ max, min, unit, step, value, onChange }) {
  return (
    <View style={styles.row}>
      <Slider
        style={{flex: 1}}
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={min}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}> 
        <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
        <Text style={{fontSize: 18, color: secondaryText}}>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
})