import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

const getStateByModalId = (modalState, modalId) => modalState.find((modal) => modal.modalId === modalId);

const MainModal = ({ modalId, title, content, className, onSubmitModal, onToggleModal, modalState }) => {
    const modal = getStateByModalId(modalState, modalId);

    return (
        <div className="add-column">
            <Modal isOpen={modal.isOpen} toggle={onToggleModal} className={className}>
                <ModalHeader toggle={onToggleModal}>{title}</ModalHeader>
                <ModalBody>{content}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onSubmitModal}>
                        Submit
                    </Button>{" "}
                    <Button color="secondary" onClick={onToggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    modalState: state.modal,
});

export default connect(mapStateToProps)(MainModal);

MainModal.propTypes = {
    modalId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.any.isRequired,
    className: PropTypes.string,
    onSubmitModal: PropTypes.func.isRequired,
    onToggleModal: PropTypes.func.isRequired,
    modalState: PropTypes.array.isRequired,
};
