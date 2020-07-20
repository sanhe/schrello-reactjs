import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { initialCardsState } from "../store/initialStates";

const cardReducer = (state = {}, action) => {
    const { card } = action;
    switch (action.type) {
        case ActionTypes.EDIT_CARD:
        case ActionTypes.ADD_CARD: {
            return {
                ...state,
                ...card,
            };
        }
        default:
            return state;
    }
};

const editCardReducer = (state, action) => {
    const actionCard = state.find((card) => card.columnId === action.columnId && card.cardId === action.cardId);
    const otherCards = state.filter((card) => card.columnId !== action.columnId && card.cardId !== action.cardId);

    return [...otherCards, cardReducer(actionCard, action)];
};

const cardsReducer = createReducer(initialCardsState, {
    [ActionTypes.ADD_CARD]: (state, action) => [...state, cardReducer({}, action)],
    [ActionTypes.EDIT_CARD]: (state, action) => editCardReducer(state, action),
    [ActionTypes.REMOVE_CARD]: (state, action) =>
        state.filter((card) => card.columnId !== action.columnId || card.cardId !== action.cardId),
    [ActionTypes.REMOVE_COLUMN_CARDS]: (state, action) => state.filter((card) => card.columnId !== action.columnId),
});

export default cardsReducer;
