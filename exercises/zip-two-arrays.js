/*
Given two arrays of strings, zip them together.  In other words, combine both arrays into a single array by taking alternating elements.
The first element in the output array should always be taken from the first input array.

Example:
Input: ["I", "my", "for", "walk"], ["took", "dog", "a"]
Output: ["I", "took", "my", "dog", "for", "a", "walk"]
Explanation: Elements are taking in alternating order from each array starting with the first element of the first input array, "I"
- Take the first element of the first input array, "I"
- Then take the first element of the second input array, "took"
- Then take the second element of the first input array, "my"

*/

/**
 * @param String[] a
 * @param String[] b
 * @returns String[]
 */
function zipArrays(a, b) {
  const result = [];
  let i = 0;
  while (i < a.length || i < b.length) {
    if (i < a.length) {
      result.push(a[i]);
    }
    if (i < b.length) {
      result.push(b[i]);
    }
    i++;
  }
  return result;
}

/*
Do not alter this code
*/
export { zipArrays };
