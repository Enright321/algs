const sum = require('./sum');
const sum2 = require('./sum2');

xdescribe(sum.name, () => {
  it('adds 1 + 2 to equal 3', () => {
    // act
    const result = sum(1, 2);

    // assert
    expect(result).toBe(3);
  });

  it('adds 3 + 2 to equal 5', () => {
    // act
    const result = sum(3, 2);

    // assert
    expect(result).toBe(5);
  });
});

xdescribe(sum2.name, () => {
  it('adds all of the numbers in array to equal 15', () => {
    const data = [1, 2, 3, 4, 5];
    // act
    const result = sum2(...data);

    // assert
    expect(result).toBe(15);
  });
});
