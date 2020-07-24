import "jest-enzyme";
import { textTruncate } from "../../Components/Text";

describe("Text functions", () => {
    it("truncate", () => {
        const trancatedText = textTruncate("Lorem ipsum dolor si amet", 10);
        expect(trancatedText).toEqual("Lorem i...");
    });
});
