import cardsReducer from "../../reducers/cardsReducer";
import { initialCardsState } from "../../store/initialStates";
import ActionTypes from "../../types/ActionTypes";

describe("Card reducer", () => {
    it("should return the initial state", () => {
        expect(cardsReducer(undefined, {})).toEqual(initialCardsState);
    });

    it("should handle ActionTypes.ADD_CARD", () => {
        const action = {
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

        expect(cardsReducer(initialCardsState, action)).toEqual([
            ...initialCardsState,
            {
                cardId: expect.any(String),
                columnId: "column_id",
                title: "New test card",
                content: "content",
                backgroundColorId: expect.any(String),
                timestamp: expect.any(String),
            },
        ]);
    });
});
