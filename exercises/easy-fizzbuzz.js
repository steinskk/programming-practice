/*
Given a number, n, return "fizz", "buzz", "fizzbuzz", or an empty string based on the following rules:
- If divisible by 3, return "fizz"
- If divisible by 5, return "buzz"
- If divisible by both 3 and 5, return "fizzbuzz"
- If divisible by neither, return an empty string ("")

Example:
Input: 6
Output: "fizz"
Explanation: 6 is divisble by 3 so we return "fizz"

Example:
Input: 15
Output: "fizzbuzz"
Explanation: 15 is divisible by both 3 and 5 so we return "fizzbuzz"

Example:
Input: 1
Output: ""
Explanation: 1 is not divisible by either 3 or 5

*/

/**
 * @param Int n
 * @returns String
 */
function easyFizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return "";
  }
}

/*
Do not alter this code
*/
export { easyFizzBuzz };
