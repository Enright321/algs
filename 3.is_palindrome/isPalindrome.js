const isPalindrome = (str) => {
  let reverseString = str.split('').reverse().join('');
  return str === reverseString;
};

console.log(isPalindrome('acecar'));

module.exports = isPalindrome;
