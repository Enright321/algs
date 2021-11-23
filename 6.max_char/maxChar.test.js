const maxChar = require('./maxChar');

xdescribe(maxChar.name, () => {
  it('properly returns the character that is most common in the string', () => {
    const result = maxChar('javascript');
    expect(result).toBe('a');
  });
});
