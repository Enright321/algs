const sumAllPrimes = require('./sumAllPrimes');

xdescribe(sumAllPrimes.name, () => {
  it('loops over the passed in number and returns the sum of all the prime numbers', () => {
    const result = sumAllPrimes(10);
    expect(result).toBe(17);
  });
});
