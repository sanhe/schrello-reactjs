import React, { useState } from "react";
import { Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import FormFeedback from "reactstrap/lib/FormFeedback";
import { addCard, editCard, setFormValueModal, toggleModal } from "../../actions/Actions";
import MainModal from "./MainModal";
import ModalTypes from "../../types/ModalTypes";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";

interface AddCardModalProps {
    modalState: Array<any>;
    className: string;
    colors: Array<any>;
    onAddCard(columnId: string, title?: string, content?: string, backgroundColorId?: string): void;
    onEditCard(columnId: string, cardId: string, title?: string, content?: string, backgroundColorId?: string): void;
    onToggleModal(modalId: string, additionalData: any): void;
    onSetFormValueModal(modalId: string, additionalData: any): void;
}

const AddCardModal = ({
    modalState,
    className,
    colors,
    onAddCard,
    onEditCard,
    onToggleModal,
    onSetFormValueModal,
}: AddCardModalProps) => {
    const currentModalState = modalState.find((modal) => modal.modalId === ModalTypes.ADD_CARD_MODAL_ID);
    const { card, isEdit } = currentModalState || {};
    const columnId = (card && card.columnId) || null;
    const cardId = (card && card.cardId) || null;
    const cardTitle = (card && card.title) || "";
    const cardContent = (card && card.content) || "";
    const cardBackgroundColorId = (card && card.backgroundColorId) || DEFAULT_CARD_BACKGROUND_COLOR_ID;

    const [titleValidationState, setTitleValidationState] = useState<string>();
    const validateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const lettersRex = /^[a-zA-Z]+$/;
        setTitleValidationState(lettersRex.test(e.currentTarget.value) ? "has-success" : "has-danger");
    };

    const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        validateTitle(e);
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, title: e.target.value } });
    };
    const contentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, content: e.target.value } });
    };
    const backgroundColorOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, backgroundColorId: e.target.value } });
    };

    const onThisToggleModal = () => {
        setTitleValidationState("");
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, {});
        onToggleModal(ModalTypes.ADD_CARD_MODAL_ID, { columnId });
    };

    const submitForm = () => {
        if (titleValidationState === "has-danger") {
            return;
        }

        // @ts-ignore
        const cardTitleValue: string = document.getElementById("cardTitle").value;
        // @ts-ignore
        const cardContentValue: string = document.getElementById("cardContent").value;
        // @ts-ignore
        const cardBackgroundColorValue: string = document.getElementById("cardBackgroundColor").value;

        if (isEdit) {
            onEditCard(columnId, cardId, cardTitleValue, cardContentValue, cardBackgroundColorValue);
        } else {
            onAddCard(columnId, cardTitleValue, cardContentValue, cardBackgroundColorValue);
        }
        onThisToggleModal();
    };

    const form = (
        <Form id="addCardForm">
            <FormGroup>
                <Label for="cardTitle">Title</Label>
                <Input
                    type="text"
                    id="cardTitle"
                    value={cardTitle}
                    onChange={titleOnChange}
                    placeholder="Input card title"
                    valid={titleValidationState === "has-success"}
                    invalid={titleValidationState === "has-danger"}
                />
                <FormFeedback valid={titleValidationState === "has-success"}>
                    Uh oh! Looks like there is an issue with this title. Please input a correct title.
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="cardContent">Content</Label>
                <Input
                    type="textarea"
                    id="cardContent"
                    value={cardContent}
                    onChange={contentOnChange}
                    placeholder="Input card content"
                />
            </FormGroup>
            <FormGroup>
                <Label for="cardBackgroundColor">Select background color</Label>
                <Input
                    type="select"
                    id="cardBackgroundColor"
                    onChange={backgroundColorOnChange}
                    defaultValue={cardBackgroundColorId}
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
        <div className="add-card">
            <MainModal
                modalId={ModalTypes.ADD_CARD_MODAL_ID}
                title={isEdit ? "Edit a card" : "Add a card"}
                content={form}
                className={className}
                onToggleModal={() => onThisToggleModal()}
                onSubmitModal={submitForm}
            />
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    colors: state.colors,
    modalState: state.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    onAddCard: (columnId: string, title: string, content: string, backgroundColorId: string) =>
        dispatch(addCard(columnId, title, content, backgroundColorId)),
    onEditCard: (columnId: string, cardId: string, title: string, content: string, backgroundColorId: string) =>
        dispatch(editCard(columnId, cardId, title, content, backgroundColorId)),
    onToggleModal: (modalId: string, additionalData: any) => dispatch(toggleModal(modalId, additionalData)),
    onSetFormValueModal: (modalId: string, formData: any) => dispatch(setFormValueModal(modalId, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardModal);
