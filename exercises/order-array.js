/*
Given an array of numbers, return the array with elements sorted in ascending order.

Example:
Input: [99,3,56,34,5,10]
Output: [3,5,10,34,56,99]
Explanation: 3 < 5 < 10 < 34 < 56 < 99

Example:
Input: [1,1,1,1,1]
Output: [1,1,1,1,1]
Explanation: The array is already sorted in ascending order so there is no need to alter it.

Bonus: Can you complete this without using extra arrays?

Hint: Try to implement Quick Sort
https://en.wikipedia.org/wiki/Quicksort

*/

/**
 * @param Int[] inputArray
 * @returns Int[]
 */
function orderArray(inputArray) {
  if (inputArray.length <= 1) {
    return inputArray;
  }
  const pivot = inputArray[0];
  const left = [];
  const right = [];

  for (let i = 1; i < inputArray.length; i++) {
 
}

/*
Do not alter this code
*/
export { orderArray };
