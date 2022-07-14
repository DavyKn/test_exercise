const reverseStr = require('./reversestring');

test('str to be reversed',() => {
  expect(reverseStr('hello')).toBe('olleh');
})