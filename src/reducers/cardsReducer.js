import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { initialCardsState } from "../store/initialStates";

const cardReducer = (state = {}, action) => {
    const { card } = action;
    switch (action.type) {
        case ActionTypes.ADD_CARD: {
            return {
                ...state,
                card,
            };
        }
        default:
            return state;
    }
};

const cardsReducer = createReducer(initialCardsState, {
    [ActionTypes.ADD_CARD]: (state, action) => [...state, cardReducer({}, action)],
    [ActionTypes.REMOVE_CARD]: (state, action) =>
        state.filter((card) => card.columnId !== action.columnId || card.cardId !== action.cardId),
});

export default cardsReducer;
