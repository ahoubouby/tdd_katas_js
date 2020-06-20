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

  it("one passed rule, passes", () => {
    const result = verifyPass("any input", [(input) => true]);
    expect(result).toBeTruthy();
  });
  it("two  rules, fails", () => {
    const result = verifyPass("any input", [(input) => true, (input) => false]);
    expect(result).toBeFalsy();
  });
  it("two  rules, passed", () => {
    const result = verifyPass("any input", [(input) => true, (input) => true]);
    expect(result).toBeTruthy();
  });
});
