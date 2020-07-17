import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import currentBoardReducer from "./currentBoardReducer";
import boardsReducer from "./boardsReducer";
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import colorsReducer from "./colorsReducer";

const rootReducer = combineReducers({
    boards: boardsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    currentBoardId: currentBoardReducer,
    modal: modalReducer,
    colors: colorsReducer,
});

export default rootReducer;
