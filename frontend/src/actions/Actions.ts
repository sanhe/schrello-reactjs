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

export const removeBoard = (boardId: string) => ({
    type: ActionTypes.REMOVE_BOARD,
    boardId,
});

export const fetchColumns = (columns: Array<any>) => ({
    type: ActionTypes.FETCH_COLUMNS,
    columns,
});

export const fetchColumnsPending = () => ({
    type: ActionTypes.FETCH_COLUMNS_PENDING,
});

export const fetchColumnsSuccess = (columns: Array<any>) => ({
    type: ActionTypes.FETCH_COLUMNS_SUCCESS,
    columns,
});

export const fetchColumnsError = (error: any) => ({
    type: ActionTypes.FETCH_COLUMNS_ERROR,
    error,
});

export const fetchCardSuccess = (cards: Array<any>) => ({
    type: ActionTypes.FETCH_CARDS_SUCCESS,
    cards,
});

export const addColumn = (title: string, backgroundColorId: string, boardId = DEFAULT_BOARD_ID) => {
    const id = nanoid();
    return {
        type: ActionTypes.ADD_COLUMN,
        column: {
            _id: id,
            columnId: id,
            boardId,
            title,
            backgroundColorId,
            timestamp: new Date().toString(),
        },
    };
};

export const removeColumn = (columnId: string) => ({
    type: ActionTypes.REMOVE_COLUMN,
    columnId,
});

export const removeColumnCards = (columnId: string) => ({
    type: ActionTypes.REMOVE_COLUMN_CARDS,
    columnId,
});

export const addCard = (columnId: string, title: string, content: string, backgroundColorId: string) => ({
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

export const editCard = (
    columnId: string,
    cardId: string,
    title: string,
    content: string,
    backgroundColorId: string,
) => ({
    type: ActionTypes.EDIT_CARD,
    card: {
        cardId,
        columnId,
        title,
        content,
        backgroundColorId,
        timestamp: new Date().toString(),
    },
});

export const removeCard = (columnId: string, cardId: string) => ({
    type: ActionTypes.REMOVE_CARD,
    columnId,
    cardId,
});

export const toggleModal = (modalId: string, additionalData = {}) => ({
    type: ActionTypes.TOGGLE_MODAL,
    modal: {
        modalId,
        additionalData,
    },
});

export const setFormValueModal = (modalId: string, additionalData = {}) => ({
    type: ActionTypes.SET_FORM_VALUE_MODAL,
    modal: {
        modalId,
        additionalData,
    },
});

export const toggleAddCardModal = (modalId: string, formData = {}) => ({
    type: ActionTypes.TOGGLE_MODAL,
    modal: {
        modalId,
        formData,
    },
});
