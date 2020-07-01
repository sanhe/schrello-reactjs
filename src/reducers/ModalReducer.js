import ModalActionTypes from "../types/ModalActionTypes";

const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case ModalActionTypes.HIDE_MODAL:
            return initialState
        default:
            return state
    }
};

export default modalReducer;