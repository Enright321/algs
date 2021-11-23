const reverseString = require('./reverse_string');

xdescribe(reverseString.name, () => {
  it('properly reverses the given string', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });
});
