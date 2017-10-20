import {AsyncStorage} from 'react-native'
import {sampleDecks} from "./sample_storage"

const DECK_STORAGE_KEY = "UdaciCards:decks"
// This is false before the program is installed
// will set to true at the first run of the program until it is uninstalled
const INIT_FLAG = "UdaciCards:init"

export function initStorage(){
    return AsyncStorage.getItem(INIT_FLAG)
        .then((results) => {
            const data = JSON.parse(results)
            if(!data){
                // populate the decks
                console.log("Fresh start")
                AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(sampleDecks))
            }
            else{
                console.log("Not a fresh start")
            }
            
        })
}

export function getDecks(){
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            console.log(data)
            return data
        })
}

export function getDeck(id){
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            return JSON.parse(results)
        })
}

export function saveDeckTitle(deck){
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            let data = JSON.parse(results)
            console.log(data[deck.name])
            if(data[deck.name]){
                console.log("This entry is already used")
                return false
            }
            else{
                AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
                    [deck.name] : deck
                }))
                console.log("Submited")
                return true
            }
        })
}

export function addCardToDeck({deckName, card}){
    console.log(deckName)
    console.log(card)
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then(r => {
        let data = JSON.parse(r)[deckName]
        data.questions = [...data.questions, card]
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [deckName]: data
        }))
    })
}