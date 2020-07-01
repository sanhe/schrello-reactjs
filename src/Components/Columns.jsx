import React from "react";
import {connect} from "react-redux";
import Column from "./Column";
import {removeColumn} from "../actions/Actions";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
    columns: state.columns
});

const mapDispatchToProps = dispatch => ({
    removeColumn: (columnId) => dispatch(removeColumn(columnId)),
});

const Columns = ({columns, removeColumn}) => (
    <>
        {console.log(columns)}
        {columns && columns.length
            ? columns.map(column => (
                <Column
                    key={column.columnId}
                    title={column.title}
                    onRemoveColumn={() => removeColumn(column.columnId)}
                />
            ))
            : "No columns yet!"}
    </>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Columns);

Columns.propTypes = {
    columns: PropTypes.array.isRequired,
    removeColumn: PropTypes.func.isRequired,
};
