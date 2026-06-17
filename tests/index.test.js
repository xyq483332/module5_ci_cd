const { greet } = require('../src/index');

test('greet function returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('greet function works with empty string', () => {
  expect(greet('')).toBe('Hello, !');
});
