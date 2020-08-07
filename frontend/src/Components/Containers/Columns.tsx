import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Column from "../Column";
import { dispatchRemoveColumn } from "../../actions/Dispatchers";
import { getColorCodeByItem } from "../Color";
import AddCardModal from "../Modals/AddCardModal";
import { fetchColumnsSuccess, toggleModal } from "../../actions/Actions";
import ModalTypes from "../../types/ModalTypes";
import { ColumnInterface } from "../../store/initialStates";

interface ColumnsProps {
    columns: Array<any>;
    colors: Array<any>;
    onRemoveColumn: (columnId: string) => void;
    onAddCardModal: (modalId: string, columnId: string) => void;
    onFetchColumns: () => void;
}

const Columns = ({ columns, colors, onRemoveColumn, onAddCardModal, onFetchColumns }: ColumnsProps) => {
    useEffect(() => {
        onFetchColumns();
    }, [onFetchColumns]);

    return (
        <>
            <AddCardModal className="success" />
            {columns && columns.length
                ? columns.map((column: ColumnInterface) => {
                      return (
                          <Column
                              key={column.columnId}
                              columnId={column.columnId}
                              title={column.title}
                              backgroundColor={getColorCodeByItem({ colors, item: column })}
                              onRemoveColumn={() => onRemoveColumn(column.columnId)}
                              onAddCardModal={() => onAddCardModal(ModalTypes.ADD_CARD_MODAL_ID, column.columnId)}
                          />
                      );
                  })
                : "No columns yet!"}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    columns: state.columns,
    colors: state.colors,
});

const mapDispatchToProps = (dispatch: any) => ({
    onRemoveColumn: (columnId: string) => dispatchRemoveColumn(dispatch, columnId),
    onAddCardModal: (modalId: string, columnId: string) => dispatch(toggleModal(modalId, { card: { columnId } })),
    onFetchColumns: () => {
        return axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/columns/all`).then(({ data }) => {
console.log(data);
            if (data && data.columns) {
                dispatch(fetchColumnsSuccess(data.columns));
            }
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Columns);
