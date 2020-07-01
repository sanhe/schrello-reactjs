import {combineReducers} from "redux";
import {nanoid} from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import modalReducer from "./ModalReducer";

const initialBoardState = {
    columns: [
        {
            columnId: 1,
            title: "Default column",
            cards: [
                {
                    cardId: 1,
                    title: "Default card"
                }
            ]
        },
        {
            columnId: 2,
            title: "Second column",
            cards: [
                {
                    cardId: 1,
                    title: "Default card"
                }
            ]
        },
        {
            columnId: 3,
            title: "Second column",
            cards: [
                {
                    cardId: 1,
                    title: "Default card"
                }
            ]
        }
    ]
};

const newStateByColumns = (state, newColumn) => ({
    ...state,
    columns: [...state.columns, newColumn]
});

function boardReducer(state = initialBoardState, action) {
    switch (action.type) {
        case ActionTypes.ADD_COLUMN: {
            const columnId = nanoid();
            const { title } = action.payload;
            const newColumn = {
                columnId: columnId,
                title: title,
                cards: []
            };

            return newStateByColumns(state, newColumn);
        }
        case ActionTypes.REMOVE_COLUMN: {
            const { columnId: removeColumnId } = action.payload;
            return {
                ...state,
                columns: state.columns.filter(column => column.columnId !== removeColumnId)
            };
        }
        case ActionTypes.ADD_CARD: {
            const { columnId } = action.payload;
            const column = state.columns.find((item, itemId) => itemId === columnId);
            const cardId = nanoid();
            const newCard = {
                cardId: cardId,
                title: action.title
            };
            const updatedColumn = {
                ...column,
                cards: [...column.cards, newCard]
            }
            return newStateByColumns(state, updatedColumn);
        }
        case ActionTypes.REMOVE_CARD: {
            const { columnId, cardId: removeCardId } = action.payload;
            const currentColumn = state.columns.find(item => item.columnId === columnId);
            const updatedColumn = currentColumn.cards.filter(item => item.cardId !== removeCardId);
            return newStateByColumns(state, updatedColumn);
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    board: boardReducer,
    modal: modalReducer,
})

export default rootReducer;
