import {
    fetchColumnsError,
    fetchColumnsPending,
    fetchColumnsSuccess,
    removeColumn,
    removeColumnCards,
} from "./Actions";
import { SchrelloDispatch } from "../store/Store";

export const dispatchRemoveColumn = (dispatch: SchrelloDispatch, columnId: string) => {
    const removeColumnDispatcher = async () => await dispatch(removeColumn(columnId));
    removeColumnDispatcher().then(() => dispatch(removeColumnCards(columnId)));
};

export const dispatchFetchColumns = (dispatch: SchrelloDispatch) => {
    return () => {
        dispatch(fetchColumnsPending());
        fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/columns/all`)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchColumnsSuccess(res.columns));
                return res.columns;
            })
            .catch((error) => {
                dispatch(fetchColumnsError(error));
            });
    };
};
