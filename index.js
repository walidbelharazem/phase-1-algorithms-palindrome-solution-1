function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}
function reverseString(word) {
  return word.split("").reverse().join("");
}
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;