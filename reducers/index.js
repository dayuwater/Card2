import {ADD_DECK, ADD_CARD} from "../actions"


export default function decks(state = {}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                [action.deck.name]: {
                   ...action.deck,
                   questions: [

                   ]
                }
                
            }

        // load deck from AsyncStorage

        case ADD_CARD:
            return{
                ...state,
                [action.deckName]:{
                    ...state[action.deckName],
                    questions:[
                        ...state[action.deckName].questions,
                        action.card
                    ]
                }
            }

        default:
            return state
    }
}

