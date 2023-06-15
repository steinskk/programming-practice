import * as fs from "fs"
import { logError, logSuccess, logMessage } from "./test-runner/logger.js"
import * as constants from "./test-runner/constants.js"

/*
 * Do not alter this code
 */
function main() {
    let fileName = process.argv.slice(2)
    if (fileName == undefined || fileName.length == 0) {
        logError("Please specify a test name using the format: npm run check -- <test name>")
        return
    }
    fileName = fileName[0]
    logMessage(`Running ${fileName}.  Please wait a moment...`)

    fs.readFile(`./test-runner/tests/${fileName}.js`, function(err, _) {
        if (err) {
            logError(`The test, ${fileName} could not be found.  Did you mispell it?`)
            return
        }

        import(`./test-runner/tests/${fileName}.js`).then(function(module) {
            let res = module.runTest()

            switch (res) {
                case constants.SUCCESS:
                    logSuccess("Congratulations! Your program produced the correct output!")
                    break
                case constants.INCORRECT_OUTPUT:
                    logError("Your program did not produce the correct output.  Give it another shot.")
                    break
                case constants.ERROR:
                default:
                    logError("There was a problem running your program.  Please fix any syntax errors and ensure you're returning the correct type.")
                    break
            }
        })
    })

}

main()