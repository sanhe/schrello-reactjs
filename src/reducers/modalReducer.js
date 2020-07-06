import ModalActionTypes from "../types/ModalActionTypes";
import { initialModalState } from "../store/initialStates";

const modalReducer = (state = initialModalState, action) => {
    switch (action.type) {
        case ModalActionTypes.SHOW_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type,
            };
        case ModalActionTypes.HIDE_MODAL:
            return initialModalState;
        default:
            return state;
    }
};

export default modalReducer;
