const arrayChunking = (arr, len) => {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }
  return chunkedArr;
};

console.log(arrayChunking([1, 2, 3, 4, 5, 6, 7], 3));

module.exports = arrayChunking;
