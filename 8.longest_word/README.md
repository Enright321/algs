Return the longest word of a string
If more than one longest word, put into an array
ex. longestWord('Hello, my name is Joe') === 'hello'
ex. longestWord('Hello there, my name is Joe') === ['hello', 'there']

plan:

1. put array of words from sentence without punctuation into variable
2. sort words from longest to shortest
3. if multiple words put into arr
4. check if more than one value

resources:

- match()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

- filter()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
