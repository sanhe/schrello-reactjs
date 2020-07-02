import ActionTypes from "../types/ActionTypes";
import {initialColumnsState} from "./initialStates";

const columnReducer = (state = {}, action) => {
    const column = action.column;
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
