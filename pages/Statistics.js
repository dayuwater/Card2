import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, green } from '../utils/colors'

class Statistics extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text> History </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Statistics


