import {combineReducers} from "redux";
import {ADD_CARD, ADD_COLUMN, REMOVE_CARD, REMOVE_COLUMN} from "../actionTypes/types";

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
        case ADD_COLUMN: {
            const columnId = state.columns.length + 1;
            const newColumn = {
                columnId: columnId,
                title: action.title,
                cards: []
            };

            return newStateByColumns(state, newColumn);
        }
        case REMOVE_COLUMN: {
            const removeColumnId = state.columns.columnId;
            return {
                ...state,
                columns: state.columns.filter(column => column.columnId !== removeColumnId)
            };
        }
        case ADD_CARD: {
            const columnId = action.columnId;
            const column = state.columns.find((item, itemId) => itemId === columnId);
            const cardId = column.cards.length;
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
        case REMOVE_CARD: {
            const columnId = action.columnId;
            const removeCardId = action.cardId;
            const currentColumn = state.columns.find(item => item.columnId === columnId);
            const updatedColumn = currentColumn.cards.filter(item => item.cardId !== removeCardId);
            return newStateByColumns(state, updatedColumn);
        }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    board: boardReducer
});

export default rootReducer;
