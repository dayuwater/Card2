export const ADD_DECK = "ADD_DECK"

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck,
    }
}

// load decks from AsyncStorage before program runs

// add a card to a deck