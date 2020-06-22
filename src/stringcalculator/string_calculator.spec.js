const { add } = require("./string_calculator");

describe("StringCalculator, add", () => {
  it("zero input with empty delimited, 0", () => {
    const result = add("", "");
    expect(result).toEqual(0);
  });
  it("single number, return same error", () => {
    const result = add("1", "");
    expect(result).toEqual(1);
  });
  it("Two numbers, comma delimited, returns the sum", () => {
    //'1,2' => 3 '10,20' => 30
    const result1 = add("1,2", ",");
    const result2 = add("10,20", ",");
    expect(result1).toEqual(3);
    expect(result2).toEqual(30);
  });

  it("Two numbers, newline delimited, returns the sum", () => {
    //'1\n2' => 3
    const result = add("1\n2", "\n");
    expect(result).toEqual(3);
  });
});
