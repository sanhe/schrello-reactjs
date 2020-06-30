import React from "react";
import {connect} from "react-redux";
import Column from "./Column";
import {removeColumn} from "../actions/Actions";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
    columns: state.board.columns
});

const mapDispatchToProps = dispatch => ({
    removeColumn: (columnId) => dispatch(removeColumn(columnId))
});

const ConnectedColumns = ({columns, removeColumn}) => (
    <>
        {columns && columns.length
            ? columns.map(column => (
                <Column key={column.columnId} title={column.title} onRemoveColumn={() => removeColumn(column.columnId)}/>
            ))
            : "No columns yet!"}
    </>
);

ConnectedColumns.propTypes = {
    columns: PropTypes.array.isRequired,
    removeColumn: PropTypes.func.isRequired,
}

const Columns = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedColumns);

export default Columns;