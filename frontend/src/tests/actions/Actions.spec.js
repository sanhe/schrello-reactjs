import { DEFAULT_BOARD_ID } from "../../store/initialStates";
import { addColumn } from "../../actions/Actions";
import ActionTypes from "../../types/ActionTypes";

describe("Actions", () => {
    it("should add column", () => {
        const expectedAction = {
            type: ActionTypes.ADD_COLUMN,
            column: {
                columnId: expect.any(String),
                boardId: DEFAULT_BOARD_ID,
                title: "New test column",
                timestamp: expect.any(String),
            },
        };
        const receivedAction = addColumn("New test column", DEFAULT_BOARD_ID);
        expect(receivedAction.column).toMatchSnapshot(expectedAction.column);
    });
});
