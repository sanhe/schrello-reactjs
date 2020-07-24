import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColumnCard from "../ColumnCard";
import { removeCard, toggleModal } from "../../actions/Actions";
import { getColorCodeByItem } from "../Color";
import ModalTypes from "../../types/ModalTypes";

interface ColumnCardsProps {
    cards: Array<any>;
    colors: Array<any>;
    columnId: string;
    onEditCardModal(formData: any): void;
    onRemoveCard(columnId: string, cardId: string): void;
}

const ColumnCards = ({ cards, colors, columnId, onEditCardModal, onRemoveCard }: ColumnCardsProps) => (
    <>
        {cards && cards.length
            ? cards
                  .filter((card) => card.columnId === columnId)
                  .map((card) => (
                      <ColumnCard
                          key={card.cardId}
                          onRemoveCard={() => onRemoveCard(columnId, card.cardId)}
                          onEditCardModal={() => onEditCardModal({ card, isEdit: true })}
                          backgroundColor={getColorCodeByItem({ colors, item: card })}
                          {...card}
                      />
                  ))
            : "No cards yet.."}
    </>
);

const mapStateToProps = (state: any) => ({
    cards: state.cards,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch: any) => ({
    onRemoveCard: (columnId: string, cardId: string) => dispatch(removeCard(columnId, cardId)),
    onEditCardModal: (formData: any) => dispatch(toggleModal(ModalTypes.ADD_CARD_MODAL_ID, formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnCards);
