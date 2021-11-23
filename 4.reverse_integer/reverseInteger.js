const reverseInteger = (num) => {
  const revString = num.toString().split('').reverse().join('');
  return parseInt(revString) * Math.sign(num);
};

module.exports = reverseInteger;
