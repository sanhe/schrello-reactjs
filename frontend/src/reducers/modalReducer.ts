import { createReducer } from "@reduxjs/toolkit";
import ActionTypes from "../types/ActionTypes";
import { initialModalState } from "../store/initialStates";

const modalReducer = createReducer(initialModalState, {
    [ActionTypes.TOGGLE_MODAL]: (state, action) => {
        const otherModals = state.filter((modal) => modal.modalId !== action.modal.modalId);
        const currentActionModal = state.find((modal) => modal.modalId === action.modal.modalId);
        const actionModal = {
            modalId: currentActionModal && currentActionModal.modalId,
            isOpen: currentActionModal && currentActionModal.isOpen,
        };

        return [
            ...otherModals,
            {
                ...actionModal,
                isOpen: !actionModal.isOpen,
                ...action.modal.additionalData,
            },
        ];
    },
    [ActionTypes.SET_FORM_VALUE_MODAL]: (state, action) => {
        const otherModals = state.filter((modal) => modal.modalId !== action.modal.modalId);
        const actionModal = state.find((modal) => modal.modalId === action.modal.modalId);

        return [
            ...otherModals,
            {
                ...actionModal,
                ...action.modal.additionalData,
            },
        ];
    }
});

export default modalReducer;
