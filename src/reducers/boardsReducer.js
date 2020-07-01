import ActionTypes from "../types/ActionTypes";
import {initialBoardsState} from "./initialStates";

const boardReducer = (state = {}, action) => {
    const board = action.board;
    switch (action.type) {
        case ActionTypes.ADD_BOARD: {
            return {
                ...state,
                board
            };
        }
        default:
            return state;
    }
}

const boardsReducer = (state = initialBoardsState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BOARD: {
            return [
                ...state,
                boardReducer({}, action)
            ];
        }
        case ActionTypes.REMOVE_BOARD: {
            const {boardId} = action;
            return state.filter(board => board.boardId !== boardId);
        }
        default:
            return state;
    }
}

export default boardsReducer;
