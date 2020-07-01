import ActionTypes from "../types/ActionTypes";

export const addColumn = (title = 'New Column') => ({
    type: ActionTypes.ADD_COLUMN,
    payload: {
        title
    }
});

export const removeColumn = columnId => ({
    type: ActionTypes.REMOVE_COLUMN,
    payload: {
        columnId
    }
});

export const addCard = (title = 'New Card', columnId) => ({
    type: ActionTypes.ADD_CARD,
    payload: {
        title,
        columnId
    },
});

export const removeCard = (columnId, cardId) => ({
    type: ActionTypes.REMOVE_CARD,
    payload: {
        columnId,
        cardId
    }
});


