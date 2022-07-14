const stringlength = require ('./stringlength');

test('length equal to 3', () => {
  expect(stringlength('str')).toBe(3);
});

test('length to equal 0', () => {
  expect(stringlength('')).toBe('empty string');
});

test('length to be more than 10', () => {
  expect(stringlength('antannarivo')).toBe('string longer than 10 char');
});