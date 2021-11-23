const isAnagram = require('./isAnagram');

xdescribe(isAnagram.name, () => {
  it('return true if the strings are anagrams, false if not.', () => {
    const result = isAnagram('elbow', 'below');
    expect(result).toBe(true);
  });
});
