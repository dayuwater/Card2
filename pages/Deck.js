import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, green, secondaryText, dark, light, orange } from '../utils/colors'
import { Ionicons, FontAwesome, Entypo, SimpleLineIcons } from '@expo/vector-icons'
import SubmitBtn from '../components/SubmitBtn'

class Deck extends Component {

    static navigationOptions = ({navigation}) => {
        const {deckName} = navigation.state.params

        return {
            title: deckName
        }
    }

    onPressStart = () => {
        const deckName = this.props.name
        this.props.navigation.navigate("Quiz", {deckName})
    }

    onPressAddCard = () => {
        const deckName = this.props.name
        this.props.navigation.navigate("AddCard", {deckName})
    }


    render(){
        const {name, category, description, timeLimit, passingScore, count } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {name} </Text>
                <Text style={styles.category}> {category} </Text>
                <Text style={styles.description}> {description} </Text>
                <View style={styles.rules} >
                    <View style={styles.rule}>
                        <Entypo name='list' size={70} color={green} style={{flex : 1}}/>
                        <Text style={styles.ruleText}> {count} Questions </Text>
                    </View>
                    <View style={styles.rule}>
                        <SimpleLineIcons name='clock' size={70} color={green} style={{flex : 1}} />
                        <Text style={styles.ruleText}> {timeLimit} Minutes </Text>
                    </View>
                    <View style={styles.rule}>
                        <Ionicons name='ios-speedometer' size={70} color={green} style={{flex : 1}}/>
                        <Text style={styles.ruleText}> {passingScore}% to pass </Text>
                    </View>
                   
                </View>
                <View style={styles.actions} >
                    { count === 0 || 
                    <SubmitBtn onPress={this.onPressStart} color={dark} text="START"/>}
                    
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


function mapStateToProps(state, {navigation}){
    const {deckName} = navigation.state.params
    const deck = state[deckName]
    return {
        ...deck,
        count: deck.questions ? deck.questions.length : 0
    }


}
export default connect(mapStateToProps)(Deck)