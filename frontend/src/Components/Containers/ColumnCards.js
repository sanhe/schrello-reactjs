import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColumnCard from "../ColumnCard";
import { removeCard } from "../../actions/Actions";

const getColorCode = (colors, card) => {
    const cardColor = colors.find((color) => color.colorId === card.backgroundColorId);
    return cardColor ? cardColor.code : "red";
};

// eslint-disable-next-line no-shadow
const ColumnCards = ({ cards, colors, columnId, removeCard }) => (
    <>
        {cards && cards.length
            ? cards
                  .filter((card) => card.columnId === columnId)
                  .map((card) => (
                      <ColumnCard
                          key={card.cardId}
                          onRemoveCard={() => removeCard(columnId, card.cardId)}
                          backgroundColor={getColorCode(colors, card)}
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
    removeCard: (columnId, cardId) => dispatch(removeCard(columnId, cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnCards);

ColumnCards.propTypes = {
    cards: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    columnId: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
};
