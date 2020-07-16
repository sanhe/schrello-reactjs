import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Form, Input } from "reactstrap";

const AddCardModal = ({ columnId, buttonLabel, className, onAddCard, cardTitle = "", cardContent = "" }) => {
    const [modal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    const toggle = () => setModal(!modal);
    const titleOnChange = (e) => {
        setTitleValue(e.target.value);
    };
    const contentOnChange = (e) => {
        setContentValue(e.target.value);
    };
    const submitForm = () => {
        onAddCard(columnId, document.getElementById("cardTitle").value, document.getElementById("cardContent").value);
        setTitleValue("");
        setContentValue("");
        toggle();
    };

    return (
        <div>
            <Button color="success" onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add a card</ModalHeader>
                <ModalBody>
                    <Form id="addCardForm">
                        <FormGroup>
                            <Label for="cardTitle">Title</Label>
                            <Input
                                type="text"
                                id="cardTitle"
                                value={titleValue || cardTitle}
                                onChange={titleOnChange}
                                placeholder="Input card title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cardContent">Content</Label>
                            <Input
                                type="textarea"
                                id="cardContent"
                                value={contentValue || cardContent}
                                onChange={contentOnChange}
                                placeholder="Input card content"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitForm}>
                        Submit
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default AddCardModal;

AddCardModal.defaultProps = {
    cardTitle: "",
    cardContent: "",
};

AddCardModal.propTypes = {
    columnId: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onAddCard: PropTypes.func.isRequired,
    cardTitle: PropTypes.string,
    cardContent: PropTypes.string,
};
