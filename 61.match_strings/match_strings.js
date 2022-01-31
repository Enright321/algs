// const matchStrings = (strings, queries) => {
//   let results = [];
//   queries.forEach((query) => {
//     results.push(strings.filter((string) => string === query).length);
//   });
//   return results;
// };

// const matchStrings = (strings, queries) => {
//   let result = [];
//   result = queries.map((query) => {
//     return strings.filter((string) => string === query).length;
//   });
//   return result;
// }

const matchStrings = (strings, queries) => {
  let results = [];
  queries.forEach((query) => {
    results.push(strings.filter((string) => string === query).length);
  });
  return results;
};

console.log(matchStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
