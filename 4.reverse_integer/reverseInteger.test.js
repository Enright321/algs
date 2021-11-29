const reverseInteger = require('./reverseInteger');

xdescribe(reverseInteger.name, () => {
  it('properly reverse the passed in integer', () => {
    const result = reverseInteger(123);

    expect(result).toBe(321);
  });
  it('properly reverse the passed in integer with opposite value sign', () => {
    const result = reverseInteger(-123);

    expect(result).toBe(-321);
  });
});
