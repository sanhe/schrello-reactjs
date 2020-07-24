import React from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { textTruncate } from "./Text";
import { CARD_TEXT_MAX_LENGTH } from "../store/initialStates";

interface ColumnCardProps {
    title: string;
    content: string;
    backgroundColor: string;
    onEditCardModal(): void;
    onRemoveCard(): void;
}

const ColumnCard = ({ title, content, backgroundColor, onEditCardModal, onRemoveCard }: ColumnCardProps) => (
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
