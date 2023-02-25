const fetchData = require("./async");

it("should return current todo", async () => {
  const data = await fetchData(1);
  expect(data.id).toBe(1);
});
