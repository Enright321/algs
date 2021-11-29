// Solution 1
// const flattenArray = (arrays) => {
//   return arrays.reduce((a, b) => a.concat(b));
// };

// Solution 2
// const flattenArray = (arrays) => {
//   return [].concat.apply([], arrays);
// };

// Solution 3
// const flattenArray = (arrays) => {
//   return [].concat(...arrays);
// };

// Solution 4
const flattenArray = (arrays) => {
  return arrays.reduce((a, b) => a.concat(b));
};

module.exports = flattenArray;
