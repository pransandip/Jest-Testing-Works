let animal = new Array("Elephant", "monkey", "bear", "tiger");

beforeAll(() => {
  console.log("BEFORE ALL 🚀");
});

describe("animals array", () => {
  beforeEach(() => {
    console.log("BEFORE EACH");
    animal = new Array("Elephant", "monkey", "bear", "tiger");
  });

  it("should add animal at the end of the array", () => {
    animal.push("alligator");
    expect(animal[animal.length - 1]).toBe("alligator");
  });

  it("should add animal at the beginning of the array", () => {
    animal.unshift("cat");
    expect(animal[0]).toBe("cat");
  });

  it("should have initial length of 4", () => {
    expect(animal.length).toBe(4);
  });
});

describe("animals array", () => {
  it("true is truthy", () => {
    expect(true).toBeTruthy();
  });
});

// describe("animals array", () => {
//   it.only("true is truthy", () => {
//     expect(true).toBeTruthy();
//   });
// });
