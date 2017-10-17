import React from 'react';
import { StyleSheet, Text, View, Platform,  StatusBar } from 'react-native';
import { TabNavigator, StackNavigator  } from 'react-navigation'
import { green, white } from './utils/colors'
import Decks from './pages/Decks'
import Deck from './pages/Deck'
import AddCard from './pages/AddCard'
import NewDeck from './pages/NewDeck'
import Statistics from './pages/Statistics'
import Quiz from './pages/Quiz'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {Ionicons, FontAwesome, Entypo} from '@expo/vector-icons'
import { Constants } from 'expo'
import reducer from './reducers'

// just use tab navigator to design UI first.
// After UI design, use Stack Navigator for real app
const Tabs = TabNavigator({
  // This will be in final
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
    }
  },
  // This will be in final
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add Card',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
    }
  },
  
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? green : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : green,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

// TODO: Add this back after UI design for stack navigators

// const MainNavigator = StackNavigator({
//   Home: {
//     screen: Tabs,
//   },
//   EntryDetail: {
//     screen: EntryDetail,
//     navigationOptions: {
//       headerTintColor: white,
//       headerStyle: {
//         backgroundColor: green
//       }
//     }
//   }
// })

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <MyStatusBar backgroundColor={green} barStyle="light-content" />
          <Tabs /> 
        </View>
      </Provider>
      
    );
  }
}

// might be obsolete
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
