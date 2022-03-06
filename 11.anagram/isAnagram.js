// solution 1
// const isAnagram = (str1, str2) => {
//   return formatStr(str1) === formatStr(str2);
// };
// const formatStr = (str) => {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// };

// solution 2
// const isAnagram = (str1, str2) => {
//   return formatStr(str1) === formatStr(str2);
// };
// const formatStr = (str) => {
//   return str
//     .match(/[a-zA-Z]/g, '')
//     .sort()
//     .join('');
// };

console.log(isAnagram('bca###', 'abc'));

module.exports = isAnagram;
