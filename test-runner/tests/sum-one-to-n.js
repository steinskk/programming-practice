import { sumOneToN } from "../../exercises/sum-one-to-n.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function calculateSum(n) {
    return ((n * (n + 1)) / 2)
}

function runTest() {
    try {
        for(let i = 0; i < 10000; i++) {
            const res = sumOneToN(i)
            const checkRes = calculateSum(i)

            if (res !== checkRes) {
                logError(`The sum for ${i} was incorrect`)
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

