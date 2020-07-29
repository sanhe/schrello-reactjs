import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";

interface MainModalProps {
    modalId: string;
    // title: string;
    content: any;
    onSubmitModal: () => void;
    onToggleModal: () => void;
    modalState: Array<any>;
    className?: string;
}

const getStateByModalId = (modalState: Array<any>, modalId: string) =>
    modalState.find((modal: any) => modal.modalId === modalId);

const MainModal: React.FC<MainModalProps> = ({
    modalId,
    title,
    content,
    onSubmitModal,
    onToggleModal,
    modalState,
    className,
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
