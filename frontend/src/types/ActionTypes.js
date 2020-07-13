import keyMirror from "keymirror";

const ActionTypes = keyMirror({
    CHANGE_CURRENT_BOARD_ID: null,
    ADD_BOARD: null,
    REMOVE_BOARD: null,
    ADD_COLUMN: null,
    REMOVE_COLUMN: null,
    ADD_CARD: null,
    REMOVE_CARD: null,
});

export default ActionTypes;
