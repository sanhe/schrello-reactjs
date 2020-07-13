import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import AlertModal from "./AlertModal";

const MODAL_TYPES = {
    alert: AlertModal,
};

const mapStateToProps = (state) => ({
    ...state.modal,
});

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line react/prop-types
            modalProps: props.modalProps,
            // eslint-disable-next-line react/prop-types
            modalIsOpen: props.modalProps.open,
        };
        this.closeModal = this.closeModal.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // eslint-disable-next-line react/prop-types
        if (nextProps.modalProps.open !== prevState.modalProps.open) {
            return {
                // eslint-disable-next-line react/prop-types
                modalIsOpen: nextProps.modalProps.open,
            };
        }
        return null;
    }

    closeModal() {
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        this.props.hideModal();
    }

    // eslint-disable-next-line class-methods-use-this
    afterOpenModal() {}

    render() {
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        if (!this.props.modalType) {
            return null;
        }

        // eslint-disable-next-line react/destructuring-assignment,react/prop-types
        const SpecifiedModal = MODAL_TYPES[this.props.modalType];
        const { modalIsOpen } = this.state;

        return (
            <>
                <ReactModal
                    isOpen={modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    bodyOpenClassName="modal-open"
                    className="modal-dialog modal-dialog-centered"
                >
                    {/* eslint-disable-next-line react/jsx-props-no-spreading,react/destructuring-assignment,react/prop-types */}
                    <SpecifiedModal closeModal={this.closeModal} {...this.props.modalProps} />
                </ReactModal>
            </>
        );
    }
}

export default connect(mapStateToProps, null)(ModalContainer);
