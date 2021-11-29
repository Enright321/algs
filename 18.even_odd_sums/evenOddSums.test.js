const evenOddSums = require('./evenOddSums');

xdescribe(evenOddSums.name, () => {
  it('Take in an array and return an array of the sums of even and odd numbers.', () => {
    const result = evenOddSums([50, 60, 60, 45, 71]);
    expect(result).toStrictEqual([170, 116]);
  });
});
