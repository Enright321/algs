const addTwoDigits = require('./addTwoDigits');

xdescribe(addTwoDigits.name, () => {
  it('takes in two numbers and adds them.', () => {
    const result = addTwoDigits(23);
    expect(result).toBe(5);
  });
});
