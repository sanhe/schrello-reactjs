import keyMirror from "keymirror";

const ActionTypes = keyMirror({
    CHANGE_CURRENT_BOARD_ID: null,
    ADD_BOARD: null,
    REMOVE_BOARD: null,
    ADD_COLUMN: null,
    REMOVE_COLUMN: null,
    REMOVE_COLUMN_CARDS: null,
    ADD_CARD: null,
    EDIT_CARD: null,
    REMOVE_CARD: null,
    TOGGLE_MODAL: null,
});

export default ActionTypes;
