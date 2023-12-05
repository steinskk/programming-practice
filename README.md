# Beginner programming practice

This is a collection of several exercises designed to get you familiar with the basics of programming and thinking logically to solve problems.  All problems can be solved using basic `if else` control flows and `for loops` so work through the problems using what you have learned so far.

### How to use the exercises

Empty submission files have been provided in the `exercises` directory.  Exercise explanations and examples are given in the empty submission files.  Your code should be entered into the empty function body of the specific exercise file.  You will not need to import any external libraries but if you would like to write your own helper functions, please do so in the same exercise file.  It is important to not alter any of the boilerplate code (code surrounding the empty function body) as this is used to run the tests.  When you are ready to test your code, you can do so by opening a terminal window in the project directory and running `npm run check -- <name of the exercise>`.  For example, when you are ready to test the `zip-two-arrays` exercise, you will run `npm run check -- zip-two-arrays`.

### Anatomy of an exercise file
An exercise file includes the following sections:
- Exercise introduction
- Example input, output, and an explanation for why the output is produced
- A comment naming and typing the function parameters
- Empty function body
- Exports for the function 

### Order of practice
You may work in any order but the following is likely easiest:
1. check-in-array
2. easy-fizzbuzz
3. sum-of-array
4. sum-one-to-n
5. sum-one-to-n-multiples-of-three-five
6. reverse-array
7. zip-two-arrays
8. order-array

### Adding an exercise

The test runner matches the exercise name argument to a file in `exercises/` and a matching file in `test-runner/tests/`.  For the elementary exercises which would be tedious to write test cases for, the test runner uses a correct solution to check the output of the solution in the exercise file.  If you follow this pattern, please be sure to include a solution that you can verify will give the correct output.  Otherwise, it may be more comprehensive to include a suite of test cases in the `runTest` function.  To add a new exercise, please add both of these files using the following templates:

```
// ./exercises/exercise-name.js

/*
<Exercise introduction

Example:
Input: <Example input>
Output: <Output given the example input>
Explanation: <Explanation of why the output is produced>

*/


/**
 * @param <Type> <parameter name>
 * @returns <Type>
 */
function functionName(<parameter name>) {
    /*
    Your code here
    */
    
}


/*
Do not alter this code
*/
export {
    functionName
}
```

```
// ./test-runner/tests/exercise-name.js

import { functionName } from "../../exercises/<exercise-name>.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function yourSolution(...) {
    return ...
}

function runTest() {
    try {
        const res = functionName(...)
        const checkRes = yourSolution(...)
        
        if (res != checkRes) {
        	logError(`The solution was incorrect`)
            return constants.INCORRECT_OUTPUT
        }
    } catch {
        return constants.ERROR
    }

    return constants.SUCCESS 
}

export {
    runTest
}
```
