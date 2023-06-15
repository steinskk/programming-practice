function logError(input) {
    console.log(`\n\n\x1b[41m${input}\x1b[0m\n\n`)
}

function logSuccess(input) {
    console.log(`\n\n\x1b[42m${input}\x1b[0m\n\n`)
}

function logMessage(input) {
    console.log(`\n${input}\n`)
}

export {
    logError,
    logSuccess,
    logMessage
}