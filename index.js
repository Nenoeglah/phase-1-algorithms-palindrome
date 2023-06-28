function reverse(word) {
  const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord; 
  }
  
  function isPalindrome(word) {
    const reversedWord = reverse(word)
    if (word === reversedWord ){
      return true
    }else{
      return false
    }
  
}


function isPalindrome(word) {
  const reversedWord = reverse(word)
  //if the input is the same as the reversed input
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
  // Write your algorithm here
  
    // Write your algorithm here

//     const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversedWord = cleanedWord.split('').reverse().join('');
//     return cleanedWord === reversedWord;
//   }
 }

/* 
  Add your pseudocode here
Convert the input word to lowercase
  - Remove non-alphanumeric characters from the word
  - Create a reversed version of the cleaned word
  - Compare the cleaned word with its reversed version
  - If they are identical, return true (it's a palindrome)
  - Otherwise, return false (it's not a palindrome)

*/

   












/*
  Add written explanation of your solution here
  
*/

// By executing this code, the user will be prompted to enter their score. After entering the score, the program will determine the corresponding grade based on the given criteria and output it to the console.







// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
