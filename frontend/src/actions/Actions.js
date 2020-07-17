import { nanoid } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { DEFAULT_BOARD_ID } from "../store/initialStates";

export const addBoard = (title = "New Board") => ({
    type: ActionTypes.ADD_BOARD,
    board: {
        boardId: nanoid(),
        title,
        timestamp: new Date().toString(),
    },
});

export const removeBoard = (boardId) => ({
    type: ActionTypes.REMOVE_BOARD,
    boardId,
});

export const addColumn = (title = "New Column", boardId = DEFAULT_BOARD_ID) => ({
    type: ActionTypes.ADD_COLUMN,
    column: {
        columnId: nanoid(),
        boardId,
        title,
        timestamp: new Date().toString(),
    },
});

export const removeColumn = (columnId) => ({
    type: ActionTypes.REMOVE_COLUMN,
    columnId,
});

export const removeColumnCards = (columnId) => ({
    type: ActionTypes.REMOVE_COLUMN_CARDS,
    columnId,
});

export const addCard = (columnId, title, content, backgroundColorId) => ({
    type: ActionTypes.ADD_CARD,
    card: {
        cardId: nanoid(),
        columnId,
        title,
        content,
        backgroundColorId,
        timestamp: new Date().toString(),
    },
});

export const removeCard = (columnId, cardId) => ({
    type: ActionTypes.REMOVE_CARD,
    columnId,
    cardId,
});
