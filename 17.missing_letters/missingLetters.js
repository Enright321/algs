// const missingLetters = (str) => {
//   let compare = str.charCodeAt(0);
//   let missing;
//   str.split('').map((char, i) => {
//     if (str.charCodeAt(i) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });

//   return missing;
// };

// const missingLetters = (str) => {
//   let compare = str.charCodeAt(0);
//   let missing;
//   str.split('').forEach((val, i) => {
//     if (str.charCodeAt(i) == compare) {
//       ++compare;
//     } else {
//       missing = String.fromCharCode(compare);
//     }
//   });
//   return missing;
// };

console.log(missingLetters('abce'));
console.log(missingLetters('abcd'));

module.exports = missingLetters;
