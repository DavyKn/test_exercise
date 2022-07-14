const calc = require('./calculator');

describe('calculations',() => {
  test('add 2 + 3 should be 5',() =>{
    expect(calc.add(2,3)).toBe(5);
  });
  test('add 4 - 1 should be 3',() =>{
    expect(calc.subtract(4,1)).toBe(3);
  });
  test('add 2 * 3 should be 5',() =>{
    expect(calc.multiply(2,3)).toBe(6);
  });
  test('add 6  divide 3 should be 2',() =>{
    expect(calc.divide(6,3)).toBe(2);
  });
});