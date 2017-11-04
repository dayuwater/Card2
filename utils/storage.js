import {AsyncStorage} from 'react-native'
// import {sampleDecks} from "./sample_storage"
import { Notifications, Permissions } from 'expo'

const DECK_STORAGE_KEY = "UdaciCards:decks"
// This is false before the program is installed
// will set to true at the first run of the program until it is uninstalled
const INIT_FLAG = "UdaciCards:init"
const NOTIFICATION_KEY = "UdaciCards:notifications"

export function initStorage(){
    return AsyncStorage.getItem(INIT_FLAG)
        .then((results) => {
            const data = JSON.parse(results)
            if(!data){
                // populate the decks
                console.log("Fresh start")
                //AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(sampleDecks))
                AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}))
                AsyncStorage.setItem(INIT_FLAG, JSON.stringify(true))
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
            console.log(results)
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
        
        console.log(data)
        data.questions = [...data.questions, card]
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
            [deckName]: data
        }))
        
    })
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Good good study, Day day up!',
        body: "👋 don't forget to quiz yourself for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    console.log("setlonof")
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            
            if (data === null) {
                console.log(data === null)
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        console.log(status)
                        // change back to 'granted' later
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            console.log("setting notifications")
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(18)
                            tomorrow.setMinutes(32)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                        else if(status === 'denied'){
                            alert("We are attempting to set you up an reminder, but it seems like your device rejected us. Please go to your settings and enable notifications.")
                        }
                    })
            }
        })
}
