import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import {green, orange, white} from '../utils/colors'



export default function SubmitBtn ({ onPress, color, text }) {

    const txt = text || "SUBMIT"
    const bcolor = color || green

    return (
      <TouchableOpacity
        style={
            [Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn,
            {backgroundColor : bcolor}
            ]}
        onPress={onPress}>
          <Text style={styles.submitBtnText}>{txt}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        backgroundColor: green,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    AndroidSubmitBtn: {
        backgroundColor: green,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})


