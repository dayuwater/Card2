import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, green, light, secondaryText, orange, dark} from '../utils/colors'
import SubmitBtn from "../components/SubmitBtn"

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

    }

    showAnswer = () => {
        this.setState((state) => ({
            ...state,
            mode: "answer"
        }))
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
                currentScore: score
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

        }

    }

    
    render(){
        const {currentQuestionIndex, currentScore, mode} = this.state
        const {questions} = this.props
        const currentQuestion = questions[currentQuestionIndex]
        const numberofQuestions = questions.length

        // handle final screen here
        if(this.state.mode === "finished"){
            console.log("finsihed")
            return(
                <View style={styles.finalContainer}>
                    <View>
                        <Text style={styles.question}> Your final score is </Text>
                        <Text style={styles.score}> {currentScore} </Text>
                    </View>
                    <View>
                        <SubmitBtn style={styles.finalButtons} text="Retry" color={green} />
                        <SubmitBtn style={styles.finalButtons} text="Go Back" color={orange} />
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}> {currentQuestionIndex + 1} / {numberofQuestions} </Text>
                    <Text style={styles.statusText}> {currentQuestion.timeLimit} seconds </Text>
                    <Text style={styles.statusText}> {currentScore} / 300 </Text>
                </View>

                {mode === "question" ? 
                    <View style={styles.questionArea}>
                        <Text style={styles.question}> {currentQuestion.question} </Text>
                        <Text style={styles.category}> {currentQuestion.category} </Text>
                        <Text style={styles.category}> Difficulty = {currentQuestion.difficulty} </Text>
                    </View>
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
        questions: state[deckName].questions
    }

}

export default connect(mapStateToProps)(Quiz)


