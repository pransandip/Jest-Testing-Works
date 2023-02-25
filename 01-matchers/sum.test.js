const { sum, compileTypescriptCode } = require("./sum");

/*---------BREAK-----------*/

describe("example tests", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

/*---------BREAK-----------*/

describe("truthy or falsy", () => {
  it("null", () => {
    /*
     * Its highly recommended to have one expect in test
     * other wise you will be confuse where causing error.
     */
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

/*---------BREAK-----------*/

describe("numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeLessThan(5);
  });
});

/*---------BREAK-----------*/

describe("adding floats", () => {
  test("2.5 plus 3.5", () => {
    const value = 2.5 + 3.5;
    expect(value).toBeCloseTo(5.999999999);
  });
});

/*---------BREAK-----------*/

describe("arrays", () => {
  const fruits = ["peach", "oranges", "kiwi"];
  expect(fruits).toContain("peach");
});

/*---------BREAK-----------*/
describe("exceptions", () => {
  it("compiling typescript goes as expected", () => {
    expect(() => compileTypescriptCode()).toThrow(Error);
  });
});
