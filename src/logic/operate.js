import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '/') {
    return one.div(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`undefined operation '${operation}'`);
}

export default operate;
