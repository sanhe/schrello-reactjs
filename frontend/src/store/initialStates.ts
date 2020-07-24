import ModalTypes from "../types/ModalTypes";

export const DEFAULT_BOARD_ID = "boardId1";
export const CARD_TEXT_MAX_LENGTH = 350;

export const initialColors = [
    {
        colorId: "1",
        title: "Light Gray",
        code: "#D3D3D3",
        isDefault: true,
    },
    {
        colorId: "2",
        title: "Black",
        code: "#000000",
    },
    {
        colorId: "3",
        title: "Red",
        code: "#FF0000",
    },
    {
        colorId: "4",
        title: "Green",
        code: "#008000",
    },
    {
        colorId: "5",
        title: "Yellow",
        code: "#FFFF00",
    },
    {
        colorId: "6",
        title: "Blue",
        code: "#0000FF",
    },
];

export const DEFAULT_CARD_BACKGROUND_COLOR_ID = "1";

export const initialBoardsState = [
    {
        boardId: DEFAULT_BOARD_ID,
        title: "Default Board",
        timestamp: new Date().toString(),
    },
];

export const initialColumnsState = [
    {
        columnId: "1",
        boardId: DEFAULT_BOARD_ID,
        title: "Default column",
        backgroundColorId: "1",
        timestamp: new Date().toString(),
    },
    {
        columnId: "2",
        boardId: DEFAULT_BOARD_ID,
        title: "Second column",
        backgroundColorId: "1",
        timestamp: new Date().toString(),
    },
    {
        columnId: "3",
        boardId: DEFAULT_BOARD_ID,
        title: "Second column",
        backgroundColorId: "1",
        timestamp: new Date().toString(),
    },
];

export const initialCardsState = [
    {
        cardId: "1",
        columnId: "1",
        title: "Card 1",
        content: "Lorem ipsum dolor si amet",
        backgroundColorId: "1",
        timestamp: new Date().toString(),
    },
    {
        cardId: "2",
        columnId: "1",
        title: "Default card",
        content: "Lorem ipsum dolor si amet",
        backgroundColorId: "2",
        timestamp: new Date().toString(),
    },
    {
        cardId: "1",
        columnId: "2",
        title: "Default card",
        content: "Lorem ipsum dolor si amet",
        backgroundColorId: "3",
        timestamp: new Date().toString(),
    },
];

export const initialModalState = [
    {
        modalId: ModalTypes.ADD_COLUMN_MODAL_ID,
        isOpen: false,
    },
    {
        modalId: ModalTypes.ADD_CARD_MODAL_ID,
        isOpen: false,
    },
];

export const initialState = {
    boards: initialBoardsState,
    columns: initialColumnsState,
    cards: initialCardsState,
    currentBoardId: DEFAULT_BOARD_ID,
    colors: initialColors,
    modal: initialModalState,
};
