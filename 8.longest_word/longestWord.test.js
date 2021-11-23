const longestWord = require('./longestWord');

xdescribe(longestWord.name, () => {
  it('return the longest word of a string', () => {
    const result = longestWord('Hello, my name is Joe');
    expect(result).toBe('hello');
  });
  it('return the longest word of a string. If multiple longest strings, return them in an array.', () => {
    const result = longestWord('Hello there, my name is Joe');
    expect(result).toEqual(['hello', 'there']);
  });
});
