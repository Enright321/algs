// Solution 1
// const arrayChunking = (arr, len) => {
//   const chunkedArr = [];
//   let i = 0;
//   while (i < arr.length) {
//     chunkedArr.push(arr.slice(i, i + len));
//     i += len;
//   }
//   return chunkedArr;
// };

// Solution 2
// const arrayChunking = (arr, len) => {
//   let chunkedArr = [];
//   for (let i = 0; i < arr.length; i += len) {
//     chunkedArr.push(arr.slice(i, i + len));
//   }
//   return chunkedArr;
// };

console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 2));

module.exports = arrayChunking;
