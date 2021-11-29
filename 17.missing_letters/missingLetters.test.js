const missingLetters = require('./missingLetters');

xdescribe(missingLetters.name, () => {
  it('find the missing letter in the passed letter range and return it. If all letters are present, return undefined.', () => {
    const result = missingLetters('abce');
    expect(result).toBe('d');
  });
  it('find the missing letter in the passed letter range and return it. If all letters are present, return undefined.', () => {
    const result = missingLetters('abcdefghjklmno');
    expect(result).toBe('i');
  });
  it('find the missing letter in the passed letter range and return it. If all letters are present, return undefined.', () => {
    const result = missingLetters('abcdefghijklmnopqrstuvwxyz');
    expect(result).toBe(undefined);
  });
});
