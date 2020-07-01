export const SchrelloLoger = store => next => action => {
    console.group('Schrello log');
    console.log('Action type:', action.type);
    console.log('Action payload:', action.payload);
    console.groupEnd();

    return next(action);
}