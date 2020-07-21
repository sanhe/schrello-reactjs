import React from "react";
import PropTypes from "prop-types";
import { Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addCard, editCard, setFormValueModal, toggleModal } from "../../actions/Actions";
import MainModal from "./MainModal";
import ModalTypes from "../../types/ModalTypes";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";

const AddCardModal = ({ modalState, className, colors, onAddCard, onEditCard, onToggleModal, onSetFormValueModal }) => {
    const currentModalState = modalState.find((modal) => modal.modalId === ModalTypes.ADD_CARD_MODAL_ID);
    const { card, isEdit } = currentModalState || {};
    const columnId = (card && card.columnId) || null;
    const cardId = (card && card.cardId) || null;
    const cardTitle = (card && card.title) || "";
    const cardContent = (card && card.content) || "";
    const cardBackgroundColorId = (card && card.backgroundColorId) || DEFAULT_CARD_BACKGROUND_COLOR_ID;

    const titleOnChange = (e) => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, title: e.target.value } });
    };
    const contentOnChange = (e) => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, content: e.target.value } });
    };
    const backgroundColorOnChange = (e) => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, { card: { ...card, backgroundColorId: e.target.value } });
    };

    const onThisToggleModal = () => {
        onSetFormValueModal(ModalTypes.ADD_CARD_MODAL_ID, {});
        onToggleModal(ModalTypes.ADD_CARD_MODAL_ID, { columnId });
    };

    const submitForm = () => {
        if (isEdit) {
            onEditCard(
                columnId,
                cardId,
                document.getElementById("cardTitle").value,
                document.getElementById("cardContent").value,
                document.getElementById("cardBackgroundColor").value,
            );
        } else {
            onAddCard(
                columnId,
                document.getElementById("cardTitle").value,
                document.getElementById("cardContent").value,
                document.getElementById("cardBackgroundColor").value,
            );
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
                />
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
                title="Add a card"
                content={form}
                className={className}
                onToggleModal={() => onThisToggleModal()}
                onSubmitModal={submitForm}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    colors: state.colors,
    modalState: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
    onAddCard: (columnId, title, content, backgroundColorId) =>
        dispatch(addCard(columnId, title, content, backgroundColorId)),
    onEditCard: (columnId, cardId, title, content, backgroundColorId) =>
        dispatch(editCard(columnId, cardId, title, content, backgroundColorId)),
    onToggleModal: (modalId, additionalData) => dispatch(toggleModal(modalId, additionalData)),
    onSetFormValueModal: (modalId, formData) => dispatch(setFormValueModal(modalId, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardModal);

AddCardModal.defaultProps = {
    cardTitle: "",
    cardContent: "",
};

AddCardModal.propTypes = {
    columnId: PropTypes.string,
    modalState: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    onAddCard: PropTypes.func.isRequired,
    onEditCard: PropTypes.func.isRequired,
    onToggleModal: PropTypes.func.isRequired,
    onSetFormValueModal: PropTypes.func.isRequired,
};
