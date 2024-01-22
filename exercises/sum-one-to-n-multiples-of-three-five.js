/*
Given an input integer, n, calculate and return the sum of the values 1 to n only considering multiples of 3 and 5.
The input values are guaranteed to be in the range 1 <= n <= 10000

Example:
Input: 5
Output: 8
Explanation: The sum of the numbers 1 to 5 only considering multiples of 3 and 5 is 3 + 5 which is 8.
1, 2, and 4 are not considered because they are not multiples of 3 or 5.

*/

/**
 * @param Int n
 * @returns Int
 */
function sumOneToN(n) {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

/*
Do not alter this code
*/
export { sumOneToN };
