// Solution 1
// const sumAllPrimes = (num) => {
//   let total = 0;
//   const checkForPrime = (i) => {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
//   for (let i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// };

// solution 2: Needs Work
// const sumAllPrimes = (num) => {
//   let sum = 0;
//   for (let i = 2; i < num; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// const isPrime = (num) => {
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

console.log(sumAllPrimes(10));

module.exports = sumAllPrimes;
