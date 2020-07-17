import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";

const ColumnCard = ({ title, content, backgroundColor, onRemoveCard }) => (
    <Card body inverse style={{ backgroundColor }}>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{content}</CardText>
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
    onRemoveCard: PropTypes.func.isRequired,
};
