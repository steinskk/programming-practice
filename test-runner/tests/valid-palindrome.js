import { checkValidPalindrome } from "../../exercises/valid-palindrome.js";
import { logError } from "../logger.js";
import * as constants from "../constants.js";

function palindrome(input) {
    input = input.toLowerCase()
    let i = 0
    let j = input.length - 1

    while (i < j) {
        while (i < j && !input[i].match(/^[0-9a-z]+$/)) {
            i++
        }
        while (i < j && !input[j].match(/^[0-9a-z]+$/)) {
            j--
        }

        if (i > j || input[i] != input[j]) {
            return false
        }

        i++
        j--
    }

    return true
}

let input = [
    ".,",
    "race a car",
    "racecar",
    "A man, a plan, a canal: Panama",
    " ",
    "This is 98989 definitely 2323 not a 2498 palin./.// drome.??"
]

function runTest() {
    try {
        for(let i = 0; i < input.length; i++) {
            const val = input[i]
            const res = checkValidPalindrome(val)
            const checkRes = palindrome(val)

            if (res != checkRes) {
                logError(`${res} is not the correct output for [${val}]`)
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

