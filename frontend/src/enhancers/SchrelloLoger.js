const SchrelloLoger = () => (next) => (action) => {
    const { type, ...otherParams } = action;

    console.group("Schrello log");
    console.log("Action type:", type);
    console.log("Action data:", otherParams);
    console.groupEnd();

    return next(action);
};

export default SchrelloLoger;
