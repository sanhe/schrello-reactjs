import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from "prop-types";

export const ColumnCard = ({title}) => (
    <div>
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </div>
);

ColumnCard.propTypes = {
    title: PropTypes.string.isRequired,
};