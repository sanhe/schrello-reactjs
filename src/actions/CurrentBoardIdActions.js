import ActionTypes from "../types/ActionTypes";

const changeCurrentBoardId = (boardId) => ({
    type: ActionTypes.CHANGE_CURRENT_BOARD_ID,
    payload: {
        boardId,
    },
});

export default changeCurrentBoardId;
