import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addCard } from "../../actions/Actions";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";

const AddCardModal = ({ columnId, buttonLabel, className, colors, onAddCard, cardTitle = "", cardContent = "" }) => {
    const [modal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    const [backgroundColorIdValue, setBackgroundColorIdValue] = useState(DEFAULT_CARD_BACKGROUND_COLOR_ID);
    const toggle = () => setModal(!modal);
    const titleOnChange = (e) => {
        setTitleValue(e.target.value);
    };
    const contentOnChange = (e) => {
        setContentValue(e.target.value);
    };
    const backgroundColorOnChange = (e) => {
        setBackgroundColorIdValue(e.target.value);
    };
    const submitForm = () => {
        onAddCard(
            columnId,
            document.getElementById("cardTitle").value,
            document.getElementById("cardContent").value,
            document.getElementById("cardBackgroundColor").value,
        );
        setTitleValue("");
        setContentValue("");
        setBackgroundColorIdValue(DEFAULT_CARD_BACKGROUND_COLOR_ID);
        toggle();
    };

    return (
        <div className="add-card">
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
                        <FormGroup>
                            <Label for="cardBackgroundColor">Select background color</Label>
                            <Input type="select" id="cardBackgroundColor" onChange={backgroundColorOnChange} defaultValue={backgroundColorIdValue}>
                                {colors && colors.length
                                    ? colors.map((color) => (
                                          <option
                                              value={color.colorId}
                                              key={color.colorId}
                                              style={{ background: color.code }}
                                          >
                                              {color.title}
                                          </option>
                                      ))
                                    : "No colors available!"}
                            </Input>
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

const mapStateToProps = (state) => ({
    colors: state.colors,
});

const mapDispatchToProps = (dispatch) => ({
    onAddCard: (columnId, title, content, backgroundColorId) =>
        dispatch(addCard(columnId, title, content, backgroundColorId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardModal);

AddCardModal.defaultProps = {
    cardTitle: "",
    cardContent: "",
};

AddCardModal.propTypes = {
    columnId: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    onAddCard: PropTypes.func.isRequired,
    cardTitle: PropTypes.string,
    cardContent: PropTypes.string,
};
