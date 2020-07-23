import { DEFAULT_BOARD_ID } from "../../store/initialStates";
import { addCard, addColumn } from "../../actions/Actions";
import ActionTypes from "../../types/ActionTypes";

describe("Actions", () => {
    it("should add a column", () => {
        const expectedAction = {
            type: ActionTypes.ADD_COLUMN,
            column: {
                columnId: expect.any(String),
                boardId: DEFAULT_BOARD_ID,
                title: "New test column",
                backgroundColorId: expect.any(String),
                timestamp: expect.any(String),
            },
        };
        const receivedAction = addColumn("New test column", "1", DEFAULT_BOARD_ID);
        expect(receivedAction).toMatchSnapshot(expectedAction);
    });

    it("should add a card", () => {
        const expectedAction = {
            type: ActionTypes.ADD_CARD,
            card: {
                cardId: expect.any(String),
                columnId: "column_id",
                title: "New test card",
                content: "content",
                backgroundColorId: expect.any(String),
                timestamp: expect.any(String),
            },
        };
        const receivedAction = addCard("column_id", "New test card", "content", "1");
        expect(receivedAction).toMatchSnapshot(expectedAction);
    });
});
