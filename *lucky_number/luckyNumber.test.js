const luckyNumber = require('./luckyNumber');

xdescribe(luckyNumber.name, () => {
  it('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(1, 10);

    expect(result).toBe(2);
  });
  it('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(58, 72);

    expect(result).toBe(10);
  });
  it('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(3628, 3628);

    expect(result).toBe(0);
  });
  it('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(361087, 773904);

    expect(result).toBe(224197);
  });
  it('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(92871036442, 3363728910382456);

    expect(result).toBe(224197);
  });
  xit('takes in two numbers and returns the amount of lucky numbers between them.', () => {
    const result = luckyNumber(1, 1000000000000000000);

    expect(result).toBe(264160473575034274);
  });
});
