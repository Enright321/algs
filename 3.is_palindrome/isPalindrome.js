const isPalindrome = (str) => {
  let reverseString = str.split('').reverse().join('');
  return str === reverseString;
};

console.log(isPalindrome('rcecar'));
console.log(isPalindrome('racecar'));

module.exports = isPalindrome;
