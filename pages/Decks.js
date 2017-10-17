import React, { Component } from 'react'
import { View, Text,  StyleSheet, Platform, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { white, green, primaryText } from '../utils/colors'
import Deck from "../components/Deck"

class Decks extends Component {

    // TODO: Use data from Redux/AsyncStorage
    renderItem = ({item}) => {
        return <Deck {...item} />
    }
    // This could be rendered as FlatList
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}> My Decks </Text>
                <FlatList
                    data = {decks}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}

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
  }

});

export default Decks


