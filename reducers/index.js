import {ADD_DECK} from "../actions"

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

        default:
            return state
    }
}

