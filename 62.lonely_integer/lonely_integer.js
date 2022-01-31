// const lonelyInteger = (a) => {
//   for (const item of a) {
//     if (a.indexOf(item) === a.lastIndexOf(item)) {
//       return item;
//     }
//   }
// };

const lonelyInteger = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
};

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
