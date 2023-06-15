import { checkInArray } from "../../exercises/check-in-array.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function inArray(haystack, needle) {
    return haystack.indexOf(needle) > -1
}

let input = [
    [[0,1,2,3,4,5], 3],
    [[0,4,5,10], 0],
    [[9,3,29,35,79], 100],
    [[1], 1],
    [[82,109,55,29,145,780,235,327,284,1,248,89], 54],
    [[1,1,1,2,1,1,1], 2],
    [[1,2], 3],
    [[1,1,1,1,1,1,1,1,1], 1],
    [[1,2,35,6,7,4,4,7,4554,4,2,3], 4],
    [[], 10]
]

function runTest() {
    try {
        for (let i = 0; i < input.length; i++) {
            const haystack = input[i][0]
            const needle = input[i][1]
            const res = checkInArray(haystack, needle)
            const checkRes = inArray(haystack, needle)

            if (res != checkRes) {
                logError(`Your output, "${res}", for haystack: [${haystack}], needle: ${needle} is not correct`)
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

