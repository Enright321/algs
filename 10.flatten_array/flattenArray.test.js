const flattenArray = require('./flattenArray');

xdescribe(flattenArray.name, () => {
  it('take an array of arrays and flatten to single array', () => {
    const result = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
