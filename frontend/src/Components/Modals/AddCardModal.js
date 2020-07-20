import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, FormGroup, Form, Input } from "reactstrap";
import { connect } from "react-redux";
import { addCard, editCard, toggleModal } from "../../actions/Actions";
import { DEFAULT_CARD_BACKGROUND_COLOR_ID } from "../../store/initialStates";
import MainModal from "./MainModal";
import ModalTypes from "../../types/ModalTypes";

const AddCardModal = ({
    modalState,
    className,
    colors,
    cards,
    onAddCard,
    onEditCard,
    onToggleModal
}) => {
    const currentModalState = modalState.find((modal) => modal.modalId === ModalTypes.ADD_CARD_MODAL_ID);
    const { columnId, cardId } = currentModalState;
    const card = cards.find((cardData) => cardData.columnId === columnId && cardData.cardId === cardId);
    const cardTitle = card && card.title;
    const cardContent = card && card.content;
    const backgroundColorId = card && card.backgroundColorId;

    const [titleValue, setTitleValue] = useState(cardTitle);
    const [contentValue, setContentValue] = useState(cardContent);
    const [backgroundColorIdValue, setBackgroundColorIdValue] = useState(
        backgroundColorId || DEFAULT_CARD_BACKGROUND_COLOR_ID,
    );

    const titleOnChange = (e) => {
        setTitleValue(e.target.value);
    };
    const contentOnChange = (e) => {
        setContentValue(e.target.value);
    };
    const backgroundColorOnChange = (e) => {
        setBackgroundColorIdValue(e.target.value);
    };

    const onThisToggleModal = () => {
        setTitleValue("");
        setContentValue("");
        setBackgroundColorIdValue(DEFAULT_CARD_BACKGROUND_COLOR_ID);
        onToggleModal(ModalTypes.ADD_CARD_MODAL_ID, { columnId });
    };

    const submitForm = () => {
        if (card) {
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
                    value={cardTitle || titleValue}
                    onChange={titleOnChange}
                    placeholder="Input card title"
                />
            </FormGroup>
            <FormGroup>
                <Label for="cardContent">Content</Label>
                <Input
                    type="textarea"
                    id="cardContent"
                    value={cardContent || contentValue}
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
                    defaultValue={backgroundColorId || backgroundColorIdValue}
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
    cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
    onAddCard: (columnId, title, content, backgroundColorId) =>
        dispatch(addCard(columnId, title, content, backgroundColorId)),
    onEditCard: (columnId, cardId, title, content, backgroundColorId) =>
        dispatch(editCard(columnId, cardId, title, content, backgroundColorId)),
    onToggleModal: (modalId, additionalData) => dispatch(toggleModal(modalId, additionalData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCardModal);

AddCardModal.defaultProps = {
    cardTitle: "",
    cardContent: "",
};

AddCardModal.propTypes = {
    columnId: PropTypes.string,
    modalState: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    className: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    onAddCard: PropTypes.func.isRequired,
    onEditCard: PropTypes.func.isRequired,
    onToggleModal: PropTypes.func.isRequired,
};
