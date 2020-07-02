import React from "react";
import {ColumnCard} from "../ColumnCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const ColumnCards = ({cards, columnId}) => (
    <>
        {cards && cards.length
            ? cards.filter(card => card.columnId === columnId).map(card => (
                <ColumnCard key={card.cardId} {...card} />
            ))
            : 'No cards yet..'
        }
    </>
);

const mapStateToProps = state => ({
    cards: state.cards
});

export default connect(
    mapStateToProps
)(ColumnCards);

ColumnCards.propTypes = {
    cards: PropTypes.array.isRequired,
    columnId: PropTypes.string.isRequired,
};
