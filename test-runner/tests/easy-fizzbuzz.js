import { easyFizzBuzz } from "../../exercises/easy-fizzbuzz.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function fizzBuzz(n) {
    let output = ""
    if (n % 3 === 0) {
        output += "fizz"
    }
    if (n % 5 === 0) {
        output += "buzz"
    }
    return output
}

function runTest() {
    try {
        for (let i = 0; i < 10000; i++) {
            const res = easyFizzBuzz(i)
            const checkRes = fizzBuzz(i)

            if (res != checkRes) {
                logError(`The output "${res}" for ${i} was incorrect`)
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

