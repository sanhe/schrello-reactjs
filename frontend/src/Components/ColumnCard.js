import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";
import { textTruncate } from "./Text";
import { CARD_TEXT_MAX_LENGTH } from "../store/initialStates";

const ColumnCard = ({ title, content, backgroundColor, onEditCardModal, onRemoveCard }) => (
    <Card body inverse style={{ backgroundColor }}>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{textTruncate(content, CARD_TEXT_MAX_LENGTH)}</CardText>
            <Button color="primary" onClick={onEditCardModal}>
                Edit card
            </Button>
            <Button color="danger" onClick={onRemoveCard}>
                Remove card
            </Button>
        </CardBody>
    </Card>
);

export default ColumnCard;

ColumnCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onEditCardModal: PropTypes.func.isRequired,
    onRemoveCard: PropTypes.func.isRequired,
};
