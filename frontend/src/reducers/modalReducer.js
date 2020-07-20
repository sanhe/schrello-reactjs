import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { initialModalState } from "../store/initialStates";

const modalReducer = createReducer(initialModalState, {
    [ActionTypes.TOGGLE_MODAL]: (state, action) => {
        const actionModal = state.find((modal) => modal.modalId === action.modal.modalId);
        const otherModals = state.filter((modal) => modal.modalId !== action.modal.modalId);

        return [
            ...otherModals,
            {
                ...actionModal,
                isOpen: !actionModal.isOpen,
                ...action.modal.additionalData,
            },
        ];
    },
});

export default modalReducer;
