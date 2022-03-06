// const capitalizeLetters = (str) => {
//   const strArr = str.toLowerCase().split(' ');
//   for (let i = 0; i < strArr.length; i++) {
//     strArr[i] =
//       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//   }
//   return strArr.join(' ');
// };

// const capitalizeLetters = (sentence) => {
//   let sentArr = sentence.split(' ');
//   for (let i = 0; i < sentArr.length; i++) {
//     sentArr[i] = sentArr[i].slice(0, 1).toUpperCase() + sentArr[i].slice(1);
//   }
//   return sentArr.join(' ');
// };

console.log(capitalizeLetters('Welcome to the jungle.'));

module.exports = capitalizeLetters;
