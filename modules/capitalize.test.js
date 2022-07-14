const capt = require('./capitalize')

test('first letter should be uppercase', () => {
  expect(capt('davis')).toBe('Davis');
});