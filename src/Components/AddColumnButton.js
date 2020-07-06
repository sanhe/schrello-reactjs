import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const AddColumnButton = ({ currentBoardId, onAddColumn }) => (
    <Button onClick={() => onAddColumn("Def title", currentBoardId)}>+</Button>
);

export default AddColumnButton;

AddColumnButton.propTypes = {
    currentBoardId: PropTypes.string.isRequired,
    onAddColumn: PropTypes.func.isRequired,
};
