function longestPalindrome(str) {
  str = str.toLowerCase();
  if (str.length < 2) {
    return "";
  }

  let palindrome = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j <= str.length - i; j++) {
      if (str.substr(i, j) === getReversedString(str, i, j)) {
        if (j > palindrome.length) {
          palindrome = str.substr(i, j);
        }
      }
    }
  }

  if (!palindrome) {
    return "";
  }

  return palindrome;
}
function getReversedString(stringToReverse, start, length) {
  const reversed = stringToReverse.substr(start, length).split('').reverse().join('');
  return reversed;
}


let result1 = longestPalindrome("I love racecars");
console.log(result1);