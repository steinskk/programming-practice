import { zipArrays } from "../../exercises/zip-two-arrays.js";
import { logError } from "../logger.js";
import { arraysEqual } from "../utils.js";
import * as constants from "../constants.js";

function zip(a, b) {
    let i = 0
    let j = 0
    let output = [];
    while (i < a.length && i < b.length) {
        if (i < a.length) {
            output.push(a[i])
            i++
        }
        if (j < b.length) {
            output.push(b[j])
            j++
        }
    }

    while (i < a.length) {
        output.push(a[i])
        i++
    }

    while (j < b.length) {
        output.push(b[j])
        j++
    }

    return output
}


let input = [
    [["I", "my", "for", "walk"],["took", "dog", "a"]],
    [["That's", "way", "cookie", "crumbles"], ["the", "the"]],
    [["All", "in", "one", "array"], []],
    [[], ["All", "in", "second", "array"]],
    [["The", "array"], ["first", "is", "much", "smaller", "than", "the", "second"]],
    [["Today", "are", "about", "arrays", "javascript"], ["we", "learning", "using", "in"]]
]

function runTest() {
    try {
        for(let i = 0; i < input.length; i++) {
            let a = input[i][0]
            let b = input[i][1]

            const res = zipArrays(a, b)
            const checkRes = zip(a, b)

            if (!arraysEqual(res, checkRes)) {
                logError(`The zipping of [${a}] and [${b}] was incorrect`)
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

