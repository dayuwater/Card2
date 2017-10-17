import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, green, secondaryText, dark, light, orange } from '../utils/colors'
import { Ionicons, FontAwesome, Entypo, SimpleLineIcons } from '@expo/vector-icons'
import SubmitBtn from '../components/SubmitBtn'

class Deck extends Component {

    onPressStart = () => {
        alert("You are about to begin a quiz")
    }

    onPressAddCard = () => {
        alert("You are about to add a car")
    }


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Deck </Text>
                <Text style={styles.category}> Law </Text>
                <Text style={styles.description}>This is a translation of an old book—indeed, in Internet time, it is a transla- tion of an ancient text. The first edition of this book was published in 1999. It was written in a very different context, and, in many ways, it was written in opposition to that context. As I describe in the first chapter, the dominant idea among those who raved about cyberspace then was that cyberspace was beyond the reach of real-space regulation. Governments couldn’t touch life online. And hence, life online would be different, and separate, from the dynamic of life offline. Code v1 was an argument against that then common view.
In the years since </Text>
                <View style={styles.rules} >
                    <View style={styles.rule}>
                        <Entypo name='list' size={70} color={green} style={{flex : 1}}/>
                        <Text style={styles.ruleText}> 10 Questions </Text>
                    </View>
                    <View style={styles.rule}>
                        <SimpleLineIcons name='clock' size={70} color={green} style={{flex : 1}} />
                        <Text style={styles.ruleText}> 30 Minutes </Text>
                    </View>
                    <View style={styles.rule}>
                        <Ionicons name='ios-speedometer' size={70} color={green} style={{flex : 1}}/>
                        <Text style={styles.ruleText}> 60% to pass </Text>
                    </View>
                   
                </View>
                <View style={styles.actions} >
                    <SubmitBtn onPress={this.onPressStart} color={dark} text="START"/>
                    <SubmitBtn onPress={this.onPressAddCard} color={orange} text="ADD CARD"/>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: green,
        fontSize: 30
    },
    category: {
        color: secondaryText,
        fontSize: 10
    },
    description: {
        color: secondaryText,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    rule: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    ruleText: {
        color: green,
        fontSize: 30,
    },
    rules: {
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
    actions: {
        marginTop: 20,
        flexDirection: "row"
    }
});

export default Deck