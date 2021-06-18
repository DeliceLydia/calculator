import calculate from '../logic/calculate';

describe('if a uses click AC button', () => {
  test('assigns null to all calculatorData', () => {
    expect(calculate({
      total: 9, next: 6, operation: '+',
    }, 'AC')).toEqual({
      total: null, next: null, operation: null,
    });
  });
  test("doesn't leave calculatorData unmutated", () => {
    expect(calculate({
      total: 9, next: 6, operation: '+',
    }, 'AC')).not.toEqual({
      total: 9, next: 6, operation: '+',
    });
  });
});

test('when total and next are provided', () => {
  const calculation = calculate({ total: '3', next: '4', operation: '+' }, '9');
  expect(calculation).toEqual({ total: '3', next: '49', operation: '+' });
});

test('when total and next are empty', () => {
  const calculation = calculate({ total: null, next: null, operation: '+' }, '9');
  expect(calculation).not.toEqual({ total: '9', next: null, operation: '+' });
});

test('% button', () => {
  const calculation = calculate({ total: '1', next: '2', operation: '+' }, '%');
  expect(calculation).toEqual({ total: '1', next: '0.02', operation: '+' });
});

test('+/- button', () => {
  const calculation = calculate({ total: '1', next: '2', operation: '+' }, '+/-');
  expect(calculation).toEqual({ total: '1', next: '-2', operation: '+' });
});

test('. button', () => {
  const calculation = calculate({ total: '1', next: '2', operation: '+' }, '.');
  expect(calculation).toEqual({ total: '1', next: '2.', operation: '+' });
});

test('operation after operation', () => {
  const calculation = calculate({ total: '1', next: '2', operation: '+' }, '-');
  expect(calculation.total).toBe('3');
});

test('equal after operation', () => {
  const calculation = calculate({ total: '1', next: '2', operation: '+' }, '=');
  expect(calculation.total).toBe('3');
});
