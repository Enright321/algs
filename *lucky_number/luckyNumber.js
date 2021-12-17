// My Solution
const luckyNumber = (L, R) => {
  const regEx = /6[^8]|8[^6]/g;
  let numArr = [];
  if (L === R) {
    return 0;
  }
  for (let i = L; i <= R; i++) {
    numArr.push(i);
  }
  let numStr = numArr.join('');
  const found = numStr.match(regEx);

  return found.length;
};

// console.log(luckyNumber(1, 10));
console.log(luckyNumber(58, 72));

module.exports = luckyNumber;
