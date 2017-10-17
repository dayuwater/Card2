import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity, TextInput  } from 'react-native'
import { connect } from 'react-redux'
import { white, green } from '../utils/colors'
import { newDeck } from "../utils/form_metas"
import MyStepper from "../components/MyStepper"
import MySlider from "../components/MySlider"
import SubmitBtn from "../components/SubmitBtn"

class NewDeck extends Component {
    state = {
        name: "",
        description: "",
        category: "",
        passingScore: 60,
        timeLimit: 30
        
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
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
        console.log(entry)

        // Update Redux

        this.setState(() => ({ 
            name: "",
            description: "",
            category: "",
            passingScore: 60,
            timeLimit: 30
        }))

        // Redirect to Home

        // Update AsyncStorage

        // Clear old notifications, create a new one
        
    }

    render(){
        const metaInfo = newDeck()
        const {difficulty, timeLimit} = this.state
        return (
            <View style={styles.container}>

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
                           
                                <MySlider value={this.state[item]}  onChange={(value) => this.slide(item, value)}
                                unit={unit} {...rest}/>
                        
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
      fontSize: 30,
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

export default NewDeck


