import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { CardInterface, initialCardsState } from "../store/initialStates";

const cardReducer = (state: any = {}, action: any) => {
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

const editCardReducer = (state: any, action: any) => {
    const actionCard = state.find(
        (card: CardInterface) => card.columnId === action.card.columnId && card.cardId === action.card.cardId,
    );

    return state.map((card: CardInterface) => {
        if (card.columnId !== action.card.columnId || card.cardId !== action.card.cardId) {
            return card;
        }

        return cardReducer(actionCard, action);
    });
};

const cardsReducer = createReducer(initialCardsState, {
    [ActionTypes.FETCH_CARDS_SUCCESS]: (state, action) => [...action.cards],
    [ActionTypes.ADD_CARD]: (state, action) => [...state, cardReducer({}, action)],
    [ActionTypes.EDIT_CARD]: (state, action) => editCardReducer(state, action),
    [ActionTypes.REMOVE_CARD]: (state, action) =>
        state.filter((card: CardInterface) => card.columnId !== action.columnId || card.cardId !== action.cardId),
    [ActionTypes.REMOVE_COLUMN_CARDS]: (state, action) =>
        state.filter((card: CardInterface) => card.columnId !== action.columnId),
});

export default cardsReducer;
