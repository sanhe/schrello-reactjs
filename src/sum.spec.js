import sum from "./sum";

describe("sum function", () => {
    it("sums up two integers", () => {
        // expect(sum(1, 2)).to.eql(3);
        // expect(sum(4, 3)).to.eql(7);
        expect(sum(1, 2)).toEqual(3);
        expect(sum(4, 3)).toEqual(7);
    });
});
