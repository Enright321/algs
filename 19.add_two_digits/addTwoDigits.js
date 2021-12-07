// Solution 1
// const addTwoDigits = (num) => {
//   const strArr = num.toString().split('');
//   if (strArr.length === 2) {
//     return parseInt(strArr[0]) + parseInt(strArr[1]);
//   } else {
//     return 'Wrong number of inputs';
//   }
// };

// const addTwoDigits = (num) => {
//   const strArr = num.toString().split('');
//   return strArr.reduce((a, b) => {
//     return parseInt(a) + parseInt(b);
//   });
// };

console.log(addTwoDigits(23));

module.exports = addTwoDigits;
