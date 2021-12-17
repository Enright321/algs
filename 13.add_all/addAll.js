// Solution 1
const addAll = (...params) => {
  return params.reduce((a, b) => a + b);
};

// Solution 2
// function addAll() {
//   var args = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

console.log(addAll(1, 2, 4));

module.exports = addAll;
