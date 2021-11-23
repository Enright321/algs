const arrayChunking = require('./arrayChunking');

xdescribe(arrayChunking.name, () => {
  it('split an array into chunked arrays of a specific length', () => {
    const result = arrayChunking([1, 2, 3, 4, 5, 6, 7], 2);

    expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });
  it('split an array into chunked arrays of a specific length', () => {
    const result = arrayChunking([1, 2, 3, 4, 5, 6, 7], 3);

    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
});
