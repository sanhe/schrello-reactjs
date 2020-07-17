import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addColumn } from "../../actions/Actions";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";

const AddColumnModal = ({ buttonLabel, className, onAddColumn, colors, currentBoardId }) => {
    const [modal, setModal] = useState(false);
    const [titleValue, setTitleValue] = useState("");
    const [backgroundColorIdValue, setBackgroundColorIdValue] = useState(DEFAULT_CARD_BACKGROUND_COLOR_ID);
    const toggle = () => setModal(!modal);
    const titleOnChange = (e) => {
        setTitleValue(e.target.value);
    };
    const backgroundColorOnChange = (e) => {
        setBackgroundColorIdValue(e.target.value);
    };
    const submitForm = () => {
        onAddColumn(
            document.getElementById("columnTitle").value,
            document.getElementById("columnBackgroundColor").value,
            currentBoardId,
        );
        setTitleValue("");
        setBackgroundColorIdValue(DEFAULT_CARD_BACKGROUND_COLOR_ID);
        toggle();
    };

    return (
        <div className="add-column">
            {/* <Button color="success" onClick={toggle}> */}
            {/*    {buttonLabel} */}
            {/* </Button> */}
            <Button onClick={toggle}>{buttonLabel || "+"}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add a card</ModalHeader>
                <ModalBody>
                    <Form id="addCardForm">
                        <FormGroup>
                            <Label for="cardTitle">Title</Label>
                            <Input
                                type="text"
                                id="columnTitle"
                                value={titleValue}
                                onChange={titleOnChange}
                                placeholder="Input card title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cardBackgroundColor">Select background color</Label>
                            <Input
                                type="select"
                                id="columnBackgroundColor"
                                onChange={backgroundColorOnChange}
                                defaultValue={backgroundColorIdValue}
                            >
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
    currentBoardId: state.currentBoardId,
});

const mapDispatchToProps = (dispatch) => ({
    onAddColumn: (title, backgroundColorId, currentBoardId) =>
        dispatch(addColumn(title, backgroundColorId, currentBoardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnModal);

AddColumnModal.propTypes = {
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
    colors: PropTypes.array.isRequired,
    onAddColumn: PropTypes.func.isRequired,
    currentBoardId: PropTypes.string.isRequired,
};
