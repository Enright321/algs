const sum2 = (...params) => {
  return params.reduce((a, b) => a + b);
};

console.log(sum2(1, 2));

module.exports = sum2;
