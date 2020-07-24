import { removeColumn, removeColumnCards } from "./Actions";

export const dispatchRemoveColumn = (dispatch: any, columnId: string) => {
    const removeColumnDispatcher = async () => await dispatch(removeColumn(columnId));
    removeColumnDispatcher().then(() => dispatch(removeColumnCards(columnId)));
};
