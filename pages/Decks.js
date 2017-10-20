import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { white, green, primaryText } from '../utils/colors'
import Deck from "../components/Deck"

class Decks extends Component {

    // TODO: Use data from Redux/AsyncStorage
    renderItem = ({item}) => {
        return <Deck {...item} onPress={() => this.gotoDeck(item.name)}/>
    }

    gotoDeck = (name) => {
        console.log(this.props)
        this.props.navigation.navigate("Deck",{deckName:name})
     
    }
     
    // This could be rendered as FlatList
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> My Decks </Text>
                {this.props.decks.length === 0 ?
                    <Text style={styles.nullText}> There is no deck yet. Click "New Deck" to add a deck </Text>
                    :
                    <FlatList
                        data={this.props.decks}
                        renderItem={this.renderItem}

                    />
                }


            </View>
        )
    }
}

// mock data, to be removed
const decks = [
    { name: "Deck 1" , cards: 8},
    { name: "Deck 2" , cards: 9},
    { name: "Deck 3" , cards: 10}

]



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  title:{
      fontSize:30,
      color: primaryText,
      marginBottom: 25,
      marginTop: 15,
      alignSelf:'center'
  },
  nullText:{
      marginLeft:15,
      marginRight: 15
  }

});

function mapStateToProps(state){
    console.log(state)
    return{
        decks: Object.keys(state).map((key) => ({
            name: key,
            cards: state[key].questions ? state[key].questions.length : 0
        }))
    }


}

export default connect(mapStateToProps)(Decks)


