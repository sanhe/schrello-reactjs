import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

interface MainModalProps {
    modalId: string;
    title: string;
    content: any;
    className?: string;
    onSubmitModal(): void;
    onToggleModal(): void;
    modalState: any;
}

const getStateByModalId = (modalState: any, modalId: string) =>
    modalState.find((modal: any) => modal.modalId === modalId);

const MainModal = ({
    modalId,
    title,
    content,
    className,
    onSubmitModal,
    onToggleModal,
    modalState,
}: MainModalProps) => {
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

const mapStateToProps = (state: any) => ({
    modalState: state.modal,
});

export default connect(mapStateToProps)(MainModal);
