const useForEach = (items, callBack) => {
  for (i = 0; i < items.length; i++) {
    callBack(items[i]);
  }
};

it("mock callback", () => {
  const mockCalledBack = jest.fn((x) => 42 + x);
  useForEach([1, 2, 3], mockCalledBack);
  expect(mockCalledBack.mock.calls.length).toBe(3);

  // ['calls0', 'calls1', 'calls2']
  expect(mockCalledBack.mock.calls[0][0]).toBe(1);
  expect(mockCalledBack.mock.calls[1][0]).toBe(2);
  expect(mockCalledBack.mock.calls[2][0]).toBe(3);

  expect(mockCalledBack.mock.results[0].value).toBe(43);
});
