import { reverseArray } from "../../exercises/reverse-array.js";
import { logError } from "../logger.js";
import { arraysEqual } from "../utils.js";
import * as constants from "../constants.js";

function reverseArraySolution(input) {
    const len = input.length
    for (let i = 0; i < len / 2; i++) {
        const temp = input[(len-1)-i]
        input[(len-1)-i] = input[i]
        input[i] = temp
    }
    return input
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
            const res = reverseArray(val)
            const checkRes = reverseArraySolution(val)

            const areEqual = arraysEqual(checkRes, res)

            if (!areEqual) {
                logError(`[${res}] is not the reverse of [${val}]`)
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

