const addAll = require('./addAll');

xdescribe(addAll.name, () => {
  it('add all the params entered', () => {
    const result = addAll(1, 2, 4);
    expect(result).toBe(7);
  });
});
