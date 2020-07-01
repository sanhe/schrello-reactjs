import ActionTypes from "../types/ActionTypes";

export const changeCurrentBoardId = (boardId) => ({
    type: ActionTypes.CHANGE_CURRENT_BOARD_ID,
    payload: {
        boardId
    }
});
