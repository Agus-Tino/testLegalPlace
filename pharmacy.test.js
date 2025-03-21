import { Drug, Pharmacy } from "./pharmacy.js";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3, -1, [-1,-2], [Infinity, 0, -Infinity],  false)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2, -1, [-1,-2], [Infinity, 0, -Infinity],  false)],
    );
  });
});
