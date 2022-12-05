import {readFile as readFileFC} from "fs"
import {error} from "./Error.js";

const readAndPrintFile = async (path, printFn) => {
  readFileFC(path, "utf-8", (err, data) => {
    if (err) {
      error()
    }
    return printFn(data)
  })
}

export {readAndPrintFile}