import {ADD_DECK} from "../actions"

export default function decks(state = {}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state
            }

        // load deck from AsyncStorage

        default:
            return state
    }
}

