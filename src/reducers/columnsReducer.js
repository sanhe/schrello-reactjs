import ActionTypes from "../types/ActionTypes";
import {initialColumnsState} from "./initialStates";

const columnReducer = (state = {}, action) => {
    const column = action.column;
console.log('bbb', column);
    switch (action.type) {
        case ActionTypes.ADD_COLUMN: {
            return {
                ...state,
                ...column
            }
        }
        default:
            return state;
    }
}

const columnsReducer = (state = initialColumnsState, action) => {
console.log('aaa', state);
    switch (action.type) {
        case ActionTypes.ADD_COLUMN: {
            return [
                ...state,
                columnReducer({}, action)
            ]
        }
        case ActionTypes.REMOVE_COLUMN: {
            return state.filter(column => column.columnId !== action.columnId);
        }
        default:
            return state;
    }
}

export default columnsReducer;
