import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from "prop-types";

export const ColumnCard = ({title, onRemoveCard}) => (
    <div>
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="danger" onClick={onRemoveCard}>Remove card</Button>
            </CardBody>
        </Card>
    </div>
);

ColumnCard.propTypes = {
    title: PropTypes.string.isRequired,
    onRemoveCard: PropTypes.func.isRequired,
};