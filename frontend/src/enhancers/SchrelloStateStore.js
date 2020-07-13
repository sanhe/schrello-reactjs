export const SCHRELLO_DEFAULT_STORE_NAME = "SCHRELLO_DEFAULT_STORE_NAME";

export const SchrelloStateStore = (store) => (next) => (action) => {
    const result = next(action);
    localStorage[SCHRELLO_DEFAULT_STORE_NAME] = JSON.stringify(store.getState());
    return result;
};
