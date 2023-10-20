function isPalindrome(word) {
  // Write your algorithm here
  result = "";
  for(i=word.length-1; i>=0; i--){
    result = result.concat(word.charAt(i));
    console.log(result);
  }
  if(result===word){
    return true;
  }else{
    return false;
  }
}

isPalindrome("racecar")

/* 
  Add your pseudocode here
  let variable result hold resulting string;
  loop through input string
    for i=length.input string - 1, iterate backwards
    result=result concat inputstring[i]
  
    test if result === input string.
              return true
        else return false
  
*/

/*
  Add written explanation of your solution here
*/

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
