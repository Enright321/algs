const flattenArray = (str1, str2) => {
  let str1Sort = str1.split('').sort().join('');
  let str2Sort = str2.split('').sort().join('');
  return str1Sort === str2Sort;
};

console.log(flattenArray('hello', 'loeh'));
