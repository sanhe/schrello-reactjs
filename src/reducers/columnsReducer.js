import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { initialColumnsState } from "../store/initialStates";

const columnReducer = (state = {}, action) => {
    const { column } = action;
    switch (action.type) {
        case ActionTypes.ADD_COLUMN: {
            return {
                ...state,
                ...column,
            };
        }
        default:
            return state;
    }
};

const columnsReducer = createReducer(initialColumnsState, {
    [ActionTypes.ADD_COLUMN]: (state, action) => [...state, columnReducer({}, action)],
    [ActionTypes.REMOVE_COLUMN]: (state, action) => state.filter((column) => column.columnId !== action.columnId),
});

export default columnsReducer;
