import operate from '../logic/operate';

test('add numbers', () => {
  expect(operate('1', '2', '+')).toEqual('3');
});

test("doesn't leave calculatorData unmutated", () => {
  expect(operate('5', '7', '+')).not.toEqual(8);
});

test('subtract numbers', () => {
  expect(operate('1', '2', '-')).toEqual('-1');
});

test("doesn't leave calculatorData unmutated", () => {
  expect(operate('5', '7', '-')).not.toEqual(2);
});

test('multiply numbers', () => {
  expect(operate('1', '2', '*')).toEqual('2');
});

test("doesn't leave calculatorData unmutated", () => {
  expect(operate('5', '7', '*')).not.toEqual(12);
});

test('divide numbers', () => {
  expect(operate('1', '2', '/')).toBe('0.5');
});

test("doesn't leave calculatorData unmutated", () => {
  expect(operate(35, 7, '/')).not.toEqual(0.2);
});
