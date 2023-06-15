import { sumOfArray } from "../../exercises/sum-of-array.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function calculateSum(inputArray) {
    return inputArray.reduce((a, b) => a + b, 0)
}

let input = [
    [0,1,2,3,4,5],
    [0,4,5,10],
    [9,3,29,35,79],
    [1],
    [82,109,55,29,145,780,235,327,284,1,248,89],
    [1,1,1,2,1,1,1],
    [1,2],
    [1,1,1,1,1,1,1,1,1],
    [1,2,35,6,7,4,4,7,4554,4,2,3],
    []
]

function runTest() {
    try {
        for(let i = 0; i < input.length; i++) {
            const val = input[i]
            const res = sumOfArray(val)
            const checkRes = calculateSum(val)

            if (res != checkRes) {
                logError(`The sum for [${val}] was incorrect`)
                return constants.INCORRECT_OUTPUT 
            }
        }
    } catch {
        return constants.ERROR
    }

    return constants.SUCCESS 
}

export {
    runTest
}

