const isPalindrome = (str) => {
  let reverseString = str.split('').reverse().join('');
  return str === reverseString;
};

module.exports = isPalindrome;
