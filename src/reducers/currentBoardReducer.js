import ActionTypes from "../types/ActionTypes";
import { DEFAULT_BOARD_ID } from "../store/initialStates";
import { createReducer } from "@reduxjs/toolkit";

const INITIAL_CURRENT_BOARD_ID = DEFAULT_BOARD_ID;

const currentBoardIdState = createReducer(INITIAL_CURRENT_BOARD_ID, {
    [ActionTypes.CHANGE_CURRENT_BOARD_ID]: (state, action) => action.payload.boardId,
});

export default currentBoardIdState;
