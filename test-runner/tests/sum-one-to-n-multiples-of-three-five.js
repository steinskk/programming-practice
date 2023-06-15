import { sumOneToN } from "../../exercises/sum-one-to-n-multiples-of-three-five.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i
        }
    }

    return sum
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

