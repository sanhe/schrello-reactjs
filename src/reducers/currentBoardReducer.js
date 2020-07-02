import ActionTypes from "../types/ActionTypes";
import {DEFAULT_BOARD_ID} from "./initialStates";

const INITIAL_CURRENT_BOARD_ID = DEFAULT_BOARD_ID;

const currentBoardIdState = (state = INITIAL_CURRENT_BOARD_ID, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_CURRENT_BOARD_ID:
            return action.payload.boardId;
        default:
            return state;
    }
}

export default currentBoardIdState;
