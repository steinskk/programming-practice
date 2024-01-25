/*
Given a string, determine whether or not the alphanumeric characters in the string for a valid palindrome.
A palindrome is a word or sentence that reads the same backwards and forwards.

Example:
Input: racecar
Output: True
Explanation: racecar reads the same both backwards and forwards

Example:
Input: car
Output: False
Explanation: when spelled backwards, car reads "rac" which means it's not a valid palindrome

*/

/**
 * @param String input
 * @returns Boolean
 */
function checkValidPalindrome(input) {
  const str = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
Do not alter this code
*/
export { checkValidPalindrome };
