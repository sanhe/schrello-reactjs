import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColumnCard from "../ColumnCard";
import { removeCard, toggleModal } from "../../actions/Actions";
import { getColorCodeByItem } from "../Color";
import ModalTypes from "../../types/ModalTypes";

const ColumnCards = ({ cards, colors, columnId, onEditCardModal, onRemoveCard }) => (
    <>
        {cards && cards.length
            ? cards
                  .filter((card) => card.columnId === columnId)
                  .map((card) => (
                      <ColumnCard
                          key={card.cardId}
                          onRemoveCard={() => onRemoveCard(columnId, card.cardId)}
                          onEditCardModal={() => onEditCardModal(columnId, card.cardId)}
                          backgroundColor={getColorCodeByItem(colors, card)}
                          {...card}
                      />
                  ))
            : "No cards yet.."}
    </>
);

const mapStateToProps = (state) => ({
    cards: state.cards,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch) => ({
    onRemoveCard: (columnId, cardId) => dispatch(removeCard(columnId, cardId)),
    onEditCardModal: (columnId, cardId) => dispatch(toggleModal(ModalTypes.ADD_CARD_MODAL_ID, { columnId, cardId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnCards);

ColumnCards.propTypes = {
    cards: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    columnId: PropTypes.string.isRequired,
    onEditCardModal: PropTypes.func.isRequired,
    onRemoveCard: PropTypes.func.isRequired,
};
