import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ColumnCard from "../ColumnCard";
import { fetchColumnsSuccess, removeCard, toggleModal } from "../../actions/Actions";
import { getColorCodeByItem } from "../Color";
import ModalTypes from "../../types/ModalTypes";

interface ColumnCardsProps {
    cards: Array<any>;
    colors: Array<any>;
    columnId: string;
    onEditCardModal: (formData: any) => void;
    onRemoveCard: (columnId: string, cardId: string) => void;
    onFetchCards: () => void;
}

const ColumnCards = ({ cards, colors, columnId, onEditCardModal, onRemoveCard, onFetchCards }: ColumnCardsProps) => {
    useEffect(() => {
        onFetchCards();
    }, [onFetchCards]);

    return (
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
};

const mapStateToProps = (state: any) => ({
    cards: state.cards,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch: any) => ({
    onRemoveCard: (columnId: string, cardId: string) => dispatch(removeCard(columnId, cardId)),
    onEditCardModal: (formData: any) => dispatch(toggleModal(ModalTypes.ADD_CARD_MODAL_ID, formData)),
    onFetchCards: () => {
        return axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/cards/all`).then(({ data }) => {
console.log(data);
            if (data && data.columns) {
                dispatch(fetchColumnsSuccess(data.cards));
            }
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnCards);
