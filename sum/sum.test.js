const sum = require('./sum');
const sum2 = require('./sum2');

describe(sum.name, () => {
  it('test 1', () => {
    // act
    const result = sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  it('test 2', () => {
    // act
    const result = sum(3, 2);

    // assert
    expect(result).toBe(5);
  });
});

describe(sum2.name, () => {
  it('test 1', () => {
    const data = [1, 2, 3, 4, 5];
    // act
    const result = sum2(...data);

    // assert
    expect(result).toBe(15);
  });
});
