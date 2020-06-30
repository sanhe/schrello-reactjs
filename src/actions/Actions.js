import {ADD_CARD, ADD_COLUMN, REMOVE_CARD, REMOVE_COLUMN} from "../types/ActionTypes";

export const addColumn = (title = 'New Column') => ({
    type: ADD_COLUMN,
    payload: {
        title
    }
});

export const removeColumn = columnId => ({
    type: REMOVE_COLUMN,
    payload: {
        columnId
    }
});

export const addCard = (title = 'New Card', columnId) => ({
    type: ADD_CARD,
    payload: {
        title,
        columnId
    },
});

export const removeCard = (columnId, cardId) => ({
    type: REMOVE_CARD,
    payload: {
        columnId,
        cardId
    }
});


