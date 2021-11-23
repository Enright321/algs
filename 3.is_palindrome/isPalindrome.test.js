const isPalindrome = require('./isPalindrome');

xdescribe(isPalindrome.name, () => {
  it('returns true if palindrome', () => {
    const result = isPalindrome('racecar');

    expect(result).toBe(true);
  });

  it('returns false if not palindrome', () => {
    const result = isPalindrome('house');

    expect(result).toBe(false);
  });
});
