import ActionTypes from "../types/ActionTypes";
import {initialCardsState} from "./initialStates";
import {createReducer} from "@reduxjs/toolkit";

const cardReducer = (state = {}, action) => {
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

const cardsReducer = createReducer(initialCardsState, {
    [ActionTypes.ADD_CARD]: (state, action) => [...state, cardReducer({}, action)],
    [ActionTypes.REMOVE_CARD]: (state, action) => state.filter(card => card.cardId !== action.cardId),
});

export default cardsReducer;
