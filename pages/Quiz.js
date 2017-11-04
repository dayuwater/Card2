import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'
import { white, green, light, secondaryText, orange, dark} from '../utils/colors'
import SubmitBtn from "../components/SubmitBtn"
import {Entypo} from "@expo/vector-icons"
import * as Storage from '../utils/storage'

class Quiz extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: "Quiz"
        }
    }


    state = {
        currentQuestionIndex: 0,
        currentScore: 0,
        mode: "question",
        opacity: new Animated.Value(0),
        passingScore : 0,
        totalScore: 0
        
        

    }

    componentDidMount(){
       
        Animated.timing(this.state.opacity,{ toValue:1, duration: 1000}).start()
        // calculate the total score possible
        const totalScore = this.props.questions.reduce((p, c) => (p + c.difficulty), 0)
        const passingScore = totalScore * this.props.passingPct / 100
        this.setState((state) => ({
            ...state,
            totalScore,
            passingScore

        }))

    }

    componentDidUpdate(prevProps, prevState){
        const {mode} = prevState
        if(mode === "answer"){
            Animated.timing(this.state.opacity,{ toValue:1, duration: 1000}).start()
        }
    }

    

    showAnswer = () => {
        Animated.timing(this.state.opacity, {toValue:0, duration:1000}).start(() => {
            this.setState((state) => ({
                ...state,
                mode: "answer"
            }))
        })
        
    }

    answerPressed = (correct) => {
        // increment the score and question count
        const ind = this.state.currentQuestionIndex
        const total = this.props.questions.length
        const difficulty = this.props.questions[ind].difficulty
        let score = this.state.currentScore
        console.log(total)

        if(correct){
            score += difficulty
        }

        // if we are not done yet
        if(ind < total-1){
            // go back to question view
            this.setState((state) => ({
                ...state,
                mode: "question",
                currentQuestionIndex : ind + 1,
                currentScore: score,
                opacity: new Animated.Value(0)
            }))
           
        }
        // if we are done
        else{
            // go to final view
            this.setState((state) => ({
                ...state,
                mode: "finished",
                currentScore: score
            }))

            // if the user passed the quiz, clear the notification, set a new one for tomorrow
            if(score >= this.state.passingScore){
                Storage.clearLocalNotification().then(Storage.setLocalNotification)
            }


        }

    }

    retry = () => {
        this.setState((state) => ({
            currentQuestionIndex: 0,
            currentScore: 0,
            mode: "question",
            opacity: new Animated.Value(1),
        }))
        

    }

    goBack = () => {
        const deckName = this.props.deckName
        this.props.navigation.navigate("Deck", {deckName})

    }

    
    render(){
        const {currentQuestionIndex, currentScore, mode, opacity, totalScore, passingScore} = this.state
        const {questions} = this.props
        const currentQuestion = questions[currentQuestionIndex]
        const numberofQuestions = questions.length

       



        // handle final screen here
        if(this.state.mode === "finished"){
            let score = 0
            if(currentScore < passingScore){
                score = currentScore / passingScore * 100
            }
            else{
                score = 100 + (currentScore - passingScore) / (totalScore - passingScore) * 100
            }
            return(
                <View style={styles.finalContainer}>
                    <View>
                        <Text style={styles.question}> Your final score is </Text>
                        <Text style={styles.score}> {Math.round(score)} </Text>
                    </View>
                    { currentScore < passingScore ?
                    (
                    
                        <Entypo name='emoji-sad' size={70} color={orange} />
                        
                    )
                        :
                    (
                       
                        <Entypo name='emoji-happy' size={70} color={green} />
                        
                    )

                    }
                   

                    <View>
                        <SubmitBtn style={styles.finalButtons} text="Restart Quiz" color={green} onPress={this.retry} />
                        <SubmitBtn style={styles.finalButtons} text="Back To Deck" color={orange} onPress={this.goBack}/>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}> {currentQuestionIndex + 1} / {numberofQuestions} </Text>
                    <Text style={styles.statusText}> {currentQuestion.timeLimit} seconds </Text>
                    {currentScore < passingScore ? 
                    <Text style={[styles.statusText, {color:orange}]}> {currentScore} / {totalScore} </Text> :
                    <Text style={[styles.statusText, {color:dark}]}> {currentScore} / {totalScore} </Text> 
                    }
                    
                </View>

                {mode === "question" ? 
                    <Animated.View style={[styles.questionArea, {opacity}]}>
                        <Text style={styles.question}> {currentQuestion.question} </Text>
                        <Text style={styles.category}> {currentQuestion.category} </Text>
                        <Text style={styles.category}> Difficulty = {currentQuestion.difficulty} </Text>
                    </Animated.View>
                :
                    <View style={styles.questionArea}>
                        <Text style={styles.question}> Answer </Text>
                        <Text style={styles.category}> {currentQuestion.answer} </Text>
                
                    </View>
                }

                   
                {mode === "question" ? 
                    <View style={styles.answerBar}>
                        <SubmitBtn text="Show Answer" color={green} onPress={this.showAnswer}/>
                    </View>
                        :
                    <View style={styles.answerBar}>    
                        <SubmitBtn text="Correct" color={green} onPress={() => this.answerPressed(true)}/>
                        <SubmitBtn text="Incorrect" color={orange} onPress={() => this.answerPressed(false)}/>
                    </View>    
                }
                   
                    
                
            </View>
        )
    }
}

// TODO: temporary quiz data for UI design. To be implemented from Redux/AsyncStorage
const quizData = [
    {question: "1+1=?", answer:"2", category:"Grade 1 math", difficulty:1, timeLimit:30},
    {question: "1+1=?", answer:"10", category:"Simple Computer Science", difficulty:2, timeLimit:30},
    {question: "1+1=?", answer:"1", category:"Boolean Algebra", difficulty:3, timeLimit:30},
    {question: "'1'+'1'='?'", answer:"b", category:"Char Arithmethic", difficulty:4, timeLimit:30},
    {question: "1+'1'=?", answer:"50", category:"Char Arithmethic", difficulty:4, timeLimit:30},
    {question: "1+'1'=?", answer:"11", category:"Javascript", difficulty:4, timeLimit:30},
    {question: "1+1-1+1-1+1-1...=?", answer:"1/2", category:"Calculus", difficulty:6, timeLimit:30},
    {question: "1+1+1+1+1+1+1...=?", answer:"infinity", category:"Calculus", difficulty:6, timeLimit:30},
    {question: "1+2+3+4+5+6+7...=?", answer:"-1/12", category:"???", difficulty:8, timeLimit:30},
    {question: "1+1=?", answer:"3", category:"Derivitive of x^3", difficulty:10, timeLimit:30},

]



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: white,
        justifyContent:"center"
        
    },
    finalContainer:{
        flex:1,
        backgroundColor: white,
        justifyContent:"space-around",
        alignItems:"center"
    },
    questionArea: {
        flex:1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusBar: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height: 60,
        backgroundColor: light
    },
    question: {
        fontSize: 40,
        color: green
    },
    category: {
        fontSize: 20,
        color: secondaryText
    },
    answerBar:{
        flexDirection: "row",
        backgroundColor:light,
        height: 60,
        alignItems:"center",
        justifyContent: "center"
        

    },
    statusText:{
        fontSize: 25,
        color: dark
    },
    score:{
        fontSize: 80,
        alignSelf: "center"
    },
    finalButtons:{
        flex : 1,
        marginTop: 30,
        
    }
});

function mapStateToProps(state, {navigation}){
    console.log(navigation.state)
    const {deckName} = navigation.state.params
    return{
        deckName,
        questions: state[deckName].questions,
        passingPct: state[deckName].passingScore
    }

}

export default connect(mapStateToProps)(Quiz)


