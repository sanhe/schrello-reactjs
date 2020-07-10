import ModalActionTypes from "../types/ModalActionTypes";

export const showModal = ({ modalProps, modalType }) => (dispatch) => {
    dispatch({
        type: ModalActionTypes.SHOW_MODAL,
        modalProps,
        modalType,
    });
};

export const hideModal = () => (dispatch) => {
    dispatch({
        type: ModalActionTypes.HIDE_MODAL,
    });
};
