// Solution 1
const evenOddSums = (arr) => {
  let evenSum = 0;
  let oddSum = 0;
  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
};

// My Solution
// const evenOddSums = (arr) => {
//   let evenArr = [];
//   let oddArr = [];
//   let i = 0;
//   arr.forEach((val, i) => {
//     if (val % 2 === 0) {
//       evenArr.push(val);
//       i++;
//     } else {
//       oddArr.push(val);
//       i++;
//     }
//   });
//   let evenSum = evenArr.reduce((a, b) => a + b);
//   let oddSum = oddArr.reduce((a, b) => a + b);
//   return [evenSum, oddSum];
// };

console.log(evenOddSums([50, 60, 60, 45, 71]));

module.exports = evenOddSums;
