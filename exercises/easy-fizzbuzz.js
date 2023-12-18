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
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
  }
}

/*
Do not alter this code
*/
export { easyFizzBuzz };
