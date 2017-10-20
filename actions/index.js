export const ADD_DECK = "ADD_DECK"
export const LOAD_DECKS = "LOAD_DECKS"
export const ADD_CARD = "ADD_CARD"

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck,
    }
}

// load decks from AsyncStorage before program runs
export function loadDecks(decks){
    return{
        type: LOAD_DECKS,
        decks
    }

}

// add a card to a deck
export function addCard({card, deckName}){
    return{
        type: ADD_CARD,
        card,
        deckName
    }
}