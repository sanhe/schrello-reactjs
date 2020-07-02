import React from "react";
import {ColumnCard} from "../ColumnCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {removeCard} from "../../actions/Actions";

const ColumnCards = ({cards, columnId, removeCard}) => (
    <>
        {cards && cards.length
            ? cards.filter(card => card.columnId === columnId).map(card => (
                <ColumnCard
                    key={card.cardId}
                    onRemoveCard={() => removeCard(columnId, card.cardId)}
                    {...card} />
            ))
            : 'No cards yet..'
        }
    </>
);

const mapStateToProps = state => ({
    cards: state.cards
});

const mapDispatchToProps = dispatch => ({
    removeCard: (columnId, cardId) => dispatch(removeCard(columnId, cardId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnCards);

ColumnCards.propTypes = {
    cards: PropTypes.array.isRequired,
    columnId: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
};
