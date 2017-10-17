import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { green, white, secondaryText, light } from '../utils/colors'


export default Deck = ({name, cards, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
            <Text style={styles.deckName}> {name} </Text>
            <Text style={styles.deckStatus}> {cards} Cards </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    
    item: {
        backgroundColor: light,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 17,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
    },

    deckName:{
        color: green,
        fontSize: 30
    },

    deckStatus:{
        color: secondaryText,
        alignSelf: "center",
        padding: 10
    }
    
})





