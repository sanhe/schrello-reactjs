import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import AlertModal from "./AlertModal";

const MODAL_TYPES = {
    alert: AlertModal,
};

const mapStateToProps = state => ({
    ...state.modal
});

class ModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalProps: props.modalProps,
            modalIsOpen: props.modalProps.open
        };
        this.closeModal = this.closeModal.bind(this);
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.modalProps.open !== prevState.modalProps.open) {
            return ({
                modalIsOpen: nextProps.modalProps.open
            })
        }
        return null;
    };

    closeModal() {
        this.props.hideModal()
    };

    render() {
        if (!this.props.modalType) {
            return null
        }

        const SpecifiedModal = MODAL_TYPES[this.props.modalType];

        return (
            <>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    // overlayClassName="modal fade show"
                    // bodyOpenClassName="modal-open"
                    // className="modal-dialog modal-dialog-centered"
                >
                    <SpecifiedModal
                        closeModal={this.closeModal}
                        {...this.props.modalProps}
                    />
                </ReactModal>
            </>
        )
    };
};

export default connect(mapStateToProps, null)(ModalContainer);