// const containsDuplicates = (arr) => {
//   const sortedArr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === sortedArr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([1, 2, 3, 4]));

module.exports = containsDuplicates;
