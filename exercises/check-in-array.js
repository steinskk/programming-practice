/*
Given an array of numbers, a haystack, and a single number, a needle, determine if the number is in the array.

Example:
Input: [99,3,56,34,5,10], 3
Output: True
Explanation: 3 is found at index 1 in the input array.

Example:
Input: haystack; [1,1,1,1,1], needle: 2
Output: False
Explanation: The value 2 does not appear in the input array.

*/

/**
 * @param Int[] haystack
 * @param Int needle
 * @returns Boolean
 */
function checkInArray(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    console.log(haystack[i]);
    if (haystack[i] == needle) {
      return true;
    }
  }
  return false;
}

/*
Do not alter this code
*/
export { checkInArray };
