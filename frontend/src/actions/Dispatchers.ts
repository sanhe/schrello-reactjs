import { removeColumn, removeColumnCards } from "./Actions";
import { SchrelloDispatch } from "../store/Store";

export const dispatchRemoveColumn = (dispatch: SchrelloDispatch, columnId: string) => {
    const removeColumnDispatcher = async () => await dispatch(removeColumn(columnId));
    removeColumnDispatcher().then(() => dispatch(removeColumnCards(columnId)));
};
