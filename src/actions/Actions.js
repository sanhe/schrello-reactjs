import ActionTypes from "../types/ActionTypes";
import {nanoid} from "@reduxjs/toolkit";
import {DEFAULT_BOARD_ID} from "../reducers/initialStates";

export const addBoard = (title = 'New Board') => ({
    type: ActionTypes.ADD_COLUMN,
    board: {
        boardId: nanoid(),
        title,
        timestamp: new Date().toString(),
    }
});

export const removeBoard = boardId => ({
    type: ActionTypes.REMOVE_BOARD,
    boardId
});

export const addColumn = (title = 'New Column', boardId = DEFAULT_BOARD_ID) => ({
    type: ActionTypes.ADD_COLUMN,
    column: {
        columnId: nanoid(),
        boardId,
        title,
        timestamp: new Date().toString(),
    },
});

export const removeColumn = columnId => ({
    type: ActionTypes.REMOVE_COLUMN,
    columnId
});

export const addCard = (title = 'New Card', columnId) => ({
    type: ActionTypes.ADD_CARD,
    card: {
        cardId: nanoid(),
        columnId,
        title,
        timestamp: new Date().toString(),
    },
});

export const removeCard = (columnId, cardId) => ({
    type: ActionTypes.REMOVE_CARD,
    columnId,
    cardId,
});


