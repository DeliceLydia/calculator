import operate from '../logic/operate';

test('add numbers', () => {
  expect(operate('1', '2', '+')).toBe('3');
});

test('subtract numbers', () => {
  expect(operate('1', '2', '-')).toBe('-1');
});

test('multiply numbers', () => {
  expect(operate('1', '2', '*')).toBe('2');
});

test('divide numbers', () => {
  expect(operate('1', '2', '/')).toBe('0.5');
});
