function wordReverser(word){
return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = wordReverser(word)
  return word === reversedWord
}

/* 
  Add your pseudocode here

  function wordReverser(word){
    return word.split('').reverse().join("")
  }


  function isPalindrome(word){
    const reversedWord = wordReverser(word)
    return word === reversedWord
  }
*/

/*
  Add written explanation of your solution here
  going to make an array, reverse the array, then put the array back into a string
  then compare that string to the original string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("b"));
}

module.exports = isPalindrome;
