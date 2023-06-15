import { orderArray } from "../../exercises/order-array.js";
import { logError } from "../logger.js";
import { arraysEqual } from "../utils.js";
import * as constants from "../constants.js";

function quickSort(input, low, high) {
    if (low < high) {
        const pivot = partition(input, low, high)
        quickSort(input, low, pivot - 1)
        quickSort(input, pivot + 1, high)
    }

}

function partition(input, low, high) {
    const pivot = input[high]
    let pivotIndex = low
    for (let i = low; i < high; i++) {
        if (input[i] < pivot) {
            swap(input, i, pivotIndex)
            pivotIndex++
        }
    }
    swap(input, high, pivotIndex)
    return pivotIndex
}

function swap(input, a, b) {
    const temp = input[b]
    input[b] = input[a]
    input[a] = temp
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
        for (let i = 0; i < input.length; i++) {
            const val = input[i]
            const res = orderArray(val)
            const checkRes = quickSort(val)

            const areEqual = arraysEqual(checkRes, res)

            if (!areEqual) {
                logError(`[${res}] is not sorted in ascending order`)
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

