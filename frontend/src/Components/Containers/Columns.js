import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Column from "../Column";
import { removeColumn, addCard } from "../../actions/Actions";

// eslint-disable-next-line no-shadow
const Columns = ({ columns, removeColumn, addCard }) => (
    <>
        {columns && columns.length
            ? columns.map((column) => (
                  <Column
                      key={column.columnId}
                      columnId={column.columnId}
                      title={column.title}
                      onRemoveColumn={() => removeColumn(column.columnId)}
                      onAddCard={addCard}
                  />
              ))
            : "No columns yet!"}
    </>
);

const mapStateToProps = (state) => ({
    columns: state.columns,
});

const mapDispatchToProps = (dispatch) => ({
    removeColumn: (columnId) => dispatch(removeColumn(columnId)),
    addCard: (columnId, title, content) => dispatch(addCard(columnId, title, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Columns);

Columns.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            columnId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    removeColumn: PropTypes.func.isRequired,
    addCard: PropTypes.func.isRequired,
};
