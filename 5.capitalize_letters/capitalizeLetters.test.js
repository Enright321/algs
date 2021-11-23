const capitalizeLetters = require('./capitalizeLetters');

xdescribe(capitalizeLetters.name, () => {
  it('Capitalize the first letter of every word in the string.', () => {
    const result = capitalizeLetters('Welcome to the jungle.');
    expect(result).toBe('Welcome To The Jungle.');
  });
});
