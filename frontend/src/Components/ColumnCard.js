import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import PropTypes from "prop-types";

const ColumnCard = ({ title, content, onRemoveCard }) => (
    <div>
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{content}</CardText>
                <Button color="danger" onClick={onRemoveCard}>
                    Remove card
                </Button>
            </CardBody>
        </Card>
    </div>
);

export default ColumnCard;

ColumnCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onRemoveCard: PropTypes.func.isRequired,
};
