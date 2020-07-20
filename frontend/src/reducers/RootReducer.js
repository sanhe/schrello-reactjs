import { combineReducers } from "redux";
import currentBoardReducer from "./currentBoardReducer";
import boardsReducer from "./boardsReducer";
import columnsReducer from "./columnsReducer";
import cardsReducer from "./cardsReducer";
import colorsReducer from "./colorsReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
    boards: boardsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    currentBoardId: currentBoardReducer,
    colors: colorsReducer,
    modal: modalReducer,
});

export default rootReducer;
