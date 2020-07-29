import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import { IconButton } from "@material-ui/core";
import { textTruncate } from "./Text";
import { CARD_TEXT_MAX_LENGTH } from "../store/initialStates";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

interface ColumnCardProps {
    title: string;
    content: string;
    backgroundColor: string;
    onEditCardModal: () => void;
    onRemoveCard: () => void;
}

const ColumnCard = ({ title, content, backgroundColor, onEditCardModal, onRemoveCard }: ColumnCardProps) => (
    <Card body inverse style={{ backgroundColor }}>
        <CardBody>
            <CardTitle>
                {title}
                <IconButton size="small" aria-label="edit" color="primary" onClick={onEditCardModal}>
                    <EditIcon />
                </IconButton>
                <IconButton size="small" aria-label="delete" color="secondary" onClick={onRemoveCard}>
                    <DeleteIcon />
                </IconButton>
            </CardTitle>
            <CardText>{textTruncate(content, CARD_TEXT_MAX_LENGTH)}</CardText>
        </CardBody>
    </Card>
);

export default ColumnCard;
