// Solution 1
const flattenArray = (arrays) => {
  return arrays.reduce((a, b) => a.concat(b));
};

// Solution 2
// const flattenArray = (arrays) => {
//   return [].concat.apply([], arrays);
// };

// Solution 3
// const flattenArray = (arrays) => {
//   return [].concat(...arrays);
// };

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

module.exports = flattenArray;
