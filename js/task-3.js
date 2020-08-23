const findLongestWord = function (string) {
  let words = string.split(" ");
  let min = 0;
  let longestWord;

  for (const word of words) {
    let size = word.length;
    if (size > min) {
      min = size;
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you"));
