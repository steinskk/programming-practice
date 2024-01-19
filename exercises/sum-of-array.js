/*
Given an array of integers, return the sum of all the elements in the array.

Example:
Input: [1,5,4,3]
Output: 13
Explanation: The sum of elements is 1 + 5 + 4 + 3 which is 13.

*/

/**
 * @param Int[] inputArray
 * @returns Int
 */
function sumOfArray(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum;
}

/*
Do not alter this code
*/
export { sumOfArray };
