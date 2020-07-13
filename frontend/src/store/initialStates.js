export const DEFAULT_BOARD_ID = "boardId1";

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
        timestamp: new Date().toString(),
    },
    {
        columnId: "2",
        boardId: DEFAULT_BOARD_ID,
        title: "Second column",
        timestamp: new Date().toString(),
    },
    {
        columnId: "3",
        boardId: DEFAULT_BOARD_ID,
        title: "Second column",
        timestamp: new Date().toString(),
    },
];

export const initialCardsState = [
    {
        cardId: "1",
        columnId: "1",
        title: "Card 1",
        timestamp: new Date().toString(),
    },
    {
        cardId: "2",
        columnId: "1",
        title: "Default card",
        timestamp: new Date().toString(),
    },
    {
        cardId: "1",
        columnId: "2",
        title: "Default card",
        timestamp: new Date().toString(),
    },
];

export const initialModalState = {
    modalType: null,
    modalProps: {
        open: false,
    },
};

export const initialState = {
    boards: initialBoardsState,
    columns: initialColumnsState,
    cards: initialCardsState,
    currentBoardId: DEFAULT_BOARD_ID,
    modal: initialModalState,
};
