import React, { useState } from "react";
import { Button, Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addColumn, toggleModal } from "../../actions/Actions";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";
import MainModal from "./MainModal";
import ModalTypes from "../../types/ModalTypes";
import { ColorInterface } from "../Color";

interface AddColumnModalProps {
    colors: Array<ColorInterface>;
    onAddColumn: (title: string, backgroundColorId: string, currentBoardId: string) => void;
    currentBoardId: string;
    onToggleModal: (modalId: string) => void;
    className?: string;
}

const defaultProps: { className: string } = {
    className: "success",
};

const AddColumnModal = ({ onAddColumn, colors, onToggleModal, currentBoardId, className }: AddColumnModalProps) => {
    const [titleValue, setTitleValue] = useState("");
    const [backgroundColorIdValue, setBackgroundColorIdValue] = useState(DEFAULT_CARD_BACKGROUND_COLOR_ID);
    const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitleValue(e.target.value);
    };
    const backgroundColorOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setBackgroundColorIdValue(e.target.value);
    };
    const onThisToggleModal = () => {
        setTitleValue("");
        setBackgroundColorIdValue(DEFAULT_CARD_BACKGROUND_COLOR_ID);
        onToggleModal(ModalTypes.ADD_COLUMN_MODAL_ID);
    };
    const submitForm = () => {
        const columnTitleValue = (document.getElementById("columnTitle") as HTMLInputElement).value;
        const columnBackgroundColor = (document.getElementById("columnBackgroundColor") as HTMLInputElement).value;

        onAddColumn(columnTitleValue, columnBackgroundColor, currentBoardId);
        onThisToggleModal();
    };
    const form = (
        <Form id="addColumnForm">
            <FormGroup>
                <Label for="columnTitle">Title</Label>
                <Input
                    type="text"
                    id="columnTitle"
                    value={titleValue}
                    onChange={titleOnChange}
                    placeholder="Input column title"
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
                              <option value={color.colorId} key={color.colorId} style={{ background: color.code }}>
                                  {color.title}
                              </option>
                          ))
                        : "No colors available!"}
                </Input>
            </FormGroup>
        </Form>
    );

    return (
        <div className="add-column">
            <Button onClick={onThisToggleModal}>+</Button>
            <MainModal
                modalId={ModalTypes.ADD_COLUMN_MODAL_ID}
                title="Add a column"
                content={form}
                className={className}
                onToggleModal={onThisToggleModal}
                onSubmitModal={submitForm}
            />
        </div>
    );
};

AddColumnModal.defaultProps = defaultProps;

const mapStateToProps = (state: any) => ({
    colors: state.colors,
    currentBoardId: state.currentBoardId,
});

const mapDispatchToProps = (dispatch: any) => ({
    onAddColumn: (title: string, backgroundColorId: string, currentBoardId: string) =>
        dispatch(addColumn(title, backgroundColorId, currentBoardId)),
    onToggleModal: (modalId: string) => dispatch(toggleModal(modalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnModal);
