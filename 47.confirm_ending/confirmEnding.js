const confirmEnding = (str, target) => {
  // get the starting point to make our comparison
  const start = str.length - target.length;
  return str.substring(start, str.length) === target;
};

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));
