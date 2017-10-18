import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { white, green, orange } from '../utils/colors'
import { newCard } from "../utils/form_metas"
import SubmitBtn from "../components/SubmitBtn"
import MyStepper from "../components/MyStepper"
import {addCard} from "../actions"
import Toast, {DURATION} from 'react-native-easy-toast'

class AddCard extends Component {

    static navigationOptions = ({navigation}) => {
        const {deckName} = navigation.state.params

        return {
            title: `Adding cards to ${deckName}`
        }
    }

    state = {
        question: "",
        answer: "",
        category: "",
        difficulty: 5,
        timeLimit: 90
        
    }

    // Using the "unit" field of the stepper to display a bar-like view
    convertDifficultyLevelToLs = (difficulty) => {
        let result = ""
        for(let i = 0; i < difficulty; i++){
            result += "lll"
        }
        return result
    }

    increment = (metric) => {
        const { max, step } = newCard(metric)

        this.setState((state) => {
            const count = state[metric] + step

            return {
                ...state,
                [metric]: count > max ? max : count,
            }
        })
    }
    decrement = (metric) => {
        const { min, step } = newCard(metric)
        this.setState((state) => {
            const count = state[metric] - step
            return {
                ...state,
                [metric]: count < min ? min : count,
            }
        })
    }

    onEdit = (text, metric) => {
        this.setState((state) => {
            return {
                ...state,
                [metric]: text
            }
        })
    }

    submit = () => {
        // Assign a key to submission
        const entry = this.state
        const {deckName} = this.props

        // Update Redux
        this.props.addCard(entry, deckName)

        this.setState(() => ({ 
            question: "",
            answer: "",
            category: "",
            difficulty: 5,
            timeLimit: 90
        }))

        // tell user the card is added
        // this.refs.toast.show('Question added. You may add more cards to the deck');
        alert('Question added. You may add more cards to the deck')

        // Update AsyncStorage

        // Clear old notifications, create a new one
        
    }

    




    render(){
        const metaInfo = newCard()
        const {difficulty, timeLimit} = this.state
        return (
            <View style={styles.container}>
                <Toast ref="toast"/>
                {Object.keys(metaInfo).map((item) => {
                    
                    const { title, type, unit, prompt, ...rest} = metaInfo[item]
                    return (
                    <View key={item} style={styles.items}>
                        <Text style={styles.title}> {title} </Text>
                        {type === "text" 
                            ?  <TextInput style={styles.textInput} 
                                placeholder = {prompt}
                                onChangeText = {(text) => this.onEdit(text,item)}
                                value={this.state[item]} />
                            :  
                            unit === "n/a" ?
                                <MyStepper value={difficulty} onIncrement={() => this.increment(item)}
                                  onDecrement={() => this.decrement(item)} unit={this.convertDifficultyLevelToLs(difficulty)} {...rest}/>
                                :
                                <MyStepper value={timeLimit} onIncrement={() => this.increment(item)} 
                                onDecrement={() => this.decrement(item)} unit={unit} {...rest}/>
                        
                        }
                    </View>
                    )

                })}

                
                <SubmitBtn onPress={this.submit} />
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-around',
  },
  items:{
    marginLeft: 20
  },
  title:{
    fontSize: 25,
    marginBottom: 10
  },
  textInput:{
    height: 40, 
    borderColor: green, 
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 3
  }
});

function mapStateToProps(state, {navigation}){
    const {deckName} = navigation.state.params
    return {
        deckName
    }

}

function mapDispatchToProps(dispatch){
    return{
        addCard: (card, deckName) => dispatch(addCard({card, deckName}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)


