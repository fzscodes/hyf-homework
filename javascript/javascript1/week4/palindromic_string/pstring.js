function longestPalindrome(str) {
  const string = str.toLowerCase();
  if (str.length < 2) {
    return null;
  }

  let palindrome = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length - i; j++) {
      if (string.substr(i, j) === stringReverser(string, i, j)) {
        if (j > palindrome.length) {
          palindrome = string.substr(i, j);
        }
      }
    }
  }

  if (!palindrome) {
    return null;
  }

  return palindrome;
}
function stringReverser(stringToReverse, start, length) {
  const reversed = stringToReverse.substr(start, length).split('').reverse().join('');
  return reversed;
}


let result1 = longestPalindrome("I love racecars");
console.log(result1);