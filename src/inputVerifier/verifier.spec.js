const { verifyPass } = require("./verifier");
describe("verifyPass", () => {
  it("no rules, passes", () => {
    const result = verifyPass("any imput ", []);
    expect(result).toBeTruthy();
  });
  it("one failed rule, fails", () => {
    const result = verifyPass("any imput", [(input) => false]);
    expect(result).toBeFalsy();
  });
});
