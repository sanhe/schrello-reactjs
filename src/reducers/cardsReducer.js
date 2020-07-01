import ActionTypes from "../types/ActionTypes";
import {initialCardsState} from "./initialStates";

const card = (state = {}, action) => {
    const card = action.card;
    switch (action.type) {
        case ActionTypes.ADD_CARD: {
            return {
                ...state,
                card
            }
        }
        default:
            return state;
    }
}

const cardsReducer = (state = initialCardsState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CARD: {
            return [
                ...state,
                card({}, action.card)
            ]
        }
        case ActionTypes.REMOVE_CARD: {
            return state.cards.filter(card => card.cardId !== action.cardId);
        }
        default:
            return state;
    }
}

export default cardsReducer;
