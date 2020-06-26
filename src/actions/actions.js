import {ADD_CARD, ADD_COLUMN, REMOVE_CARD, REMOVE_COLUMN} from "../actionTypes/types";

export function addColumn(title = 'New Column') {
    return {
        type: ADD_COLUMN,
        title
    };
}

export function removeColumn(columnId) {
    return {
        type: REMOVE_COLUMN,
        columnId
    };
}

export function addCard(title = 'New Card', columnId) {
    return {
        type: ADD_CARD,
        title,
        columnId
    };
}

export function removeCard(columnId, cardId) {
    return {
        type: REMOVE_COLUMN,
        columnId,
        cardId
    };
}


