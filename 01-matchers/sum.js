function sum(a, b) {
  return a + b;
}

function compileTypescriptCode() {
  throw new Error("you are using very old version:tsc");
}

console.log({} === {});
console.log([] === []);

module.exports = { sum, compileTypescriptCode };
