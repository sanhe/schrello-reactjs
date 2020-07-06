import ActionTypes from "../types/ActionTypes";
import { initialBoardsState } from "../store/initialStates";
import { createReducer } from "@reduxjs/toolkit";

const boardReducer = (state = {}, action) => {
    const board = action.board;
    switch (action.type) {
        case ActionTypes.ADD_BOARD: {
            return {
                ...state,
                board,
            };
        }
        default:
            return state;
    }
};

const boardsReducer = createReducer(initialBoardsState, {
    [ActionTypes.ADD_BOARD]: (state, action) => [...state, boardReducer({}, action)],
    [ActionTypes.REMOVE_BOARD]: (state, { boardId }) => state.filter((board) => board.boardId !== boardId),
});

export default boardsReducer;
